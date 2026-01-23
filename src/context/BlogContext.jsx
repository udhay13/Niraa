import { createContext, useContext, useState, useEffect } from 'react';
import { initialBlogPosts } from '../data/blogs';

const BlogContext = createContext();

const STORAGE_KEY = 'nira_aesthetics_blogs';
const ADMIN_STORAGE_KEY = 'nira_aesthetics_admin';

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : initialBlogPosts;
    });

    const [isAdmin, setIsAdmin] = useState(() => {
        return localStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
    }, [blogs]);

    useEffect(() => {
        localStorage.setItem(ADMIN_STORAGE_KEY, isAdmin.toString());
    }, [isAdmin]);

    const addBlog = (blog) => {
        const newBlog = {
            ...blog,
            id: Date.now().toString(),
            slug: blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            publishedAt: new Date().toISOString().split('T')[0]
        };
        setBlogs(prev => [newBlog, ...prev]);
        return newBlog;
    };

    const updateBlog = (id, updates) => {
        setBlogs(prev => prev.map(blog =>
            blog.id === id ? { ...blog, ...updates } : blog
        ));
    };

    const deleteBlog = (id) => {
        setBlogs(prev => prev.filter(blog => blog.id !== id));
    };

    const getBlogById = (id) => {
        return blogs.find(blog => blog.id === id);
    };

    const getBlogBySlug = (slug) => {
        return blogs.find(blog => blog.slug === slug);
    };

    const getPublishedBlogs = () => {
        return blogs
            .filter(blog => blog.isPublished)
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    };

    const getLatestBlogs = (count = 3) => {
        return getPublishedBlogs().slice(0, count);
    };

    const login = (password) => {
        // Simple password check for demo purposes
        if (password === 'nira2024') {
            setIsAdmin(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdmin(false);
    };

    return (
        <BlogContext.Provider value={{
            blogs,
            isAdmin,
            addBlog,
            updateBlog,
            deleteBlog,
            getBlogById,
            getBlogBySlug,
            getPublishedBlogs,
            getLatestBlogs,
            login,
            logout
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
