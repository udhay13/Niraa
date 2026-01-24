import { createContext, useContext, useState, useEffect } from 'react';
import {
    collection,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy
} from 'firebase/firestore';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { db, auth } from '../config/firebase';
import { initialBlogPosts } from '../data/blogs';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]); // Start empty, load from DB
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Auth Listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Real-time Blogs Listener
    useEffect(() => {
        const blogsRef = collection(db, 'blogs');
        // Sort by publishedAt desc
        const q = query(blogsRef); // order handled in client or simple sort

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const blogsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            // Sort client-side for simplicity if formatted date string
            // ISO strings sort naturally
            blogsData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            setBlogs(blogsData);
            setLoading(false);
            setError(null); // Clear error on success
        }, (err) => {
            console.error("Error fetching blogs:", err);
            setError(err.message);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const addBlog = async (blog) => {
        const newBlog = {
            ...blog,
            slug: blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            publishedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        };
        const docRef = await addDoc(collection(db, 'blogs'), newBlog);
        return { id: docRef.id, ...newBlog };
    };

    const updateBlog = async (id, updates) => {
        const blogRef = doc(db, 'blogs', id);
        // If title is updated, update slug too to keep URL fresh
        if (updates.title) {
            updates.slug = updates.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }
        await updateDoc(blogRef, updates);
    };

    const deleteBlog = async (id) => {
        try {
            console.log("BlogContext: deleting doc", id);
            console.log("Current Auth User:", auth.currentUser ? auth.currentUser.uid : "Not Logged In");
            const blogRef = doc(db, 'blogs', id);
            await deleteDoc(blogRef);
        } catch (err) {
            console.error("Error deleting blog:", err);
            throw err;
        }
    };

    // Seed Data (One-time use)
    const seedBlogs = async () => {
        const blogsRef = collection(db, 'blogs');
        for (const blog of initialBlogPosts) {
            // Remove 'id' field to let Firestore generate one, or use setDoc
            const { id, ...data } = blog;
            await addDoc(blogsRef, {
                ...data,
                publishedAt: new Date().toISOString() // Ensure standard date
            });
        }
        alert('Seeding complete!');
    };

    const getBlogBySlug = (slug) => {
        return blogs.find(blog => blog.slug === slug);
    };

    const getPublishedBlogs = () => {
        return blogs.filter(blog => blog.isPublished);
    };

    const getLatestBlogs = (count = 3) => {
        return getPublishedBlogs().slice(0, count);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    return (
        <BlogContext.Provider value={{
            blogs,
            isAdmin: !!user, // Logged in = Admin
            user,
            loading,
            error,
            addBlog,
            updateBlog,
            deleteBlog,
            getBlogBySlug,
            getPublishedBlogs,
            getLatestBlogs,
            login,
            logout,
            seedBlogs
        }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};

export default BlogContext;
