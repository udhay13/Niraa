import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useBlog } from '../context/BlogContext';
import './BlogList.css';

const BlogList = () => {
    const { getPublishedBlogs, loading, error } = useBlog();
    const blogs = getPublishedBlogs();

    if (loading) {
        return (
            <div className="page-loading">
                <div className="spinner"></div>
                <p>Loading Expert Insights...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container" style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-error)' }}>
                <h2>Connection Error</h2>
                <p>{error}</p>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                    Check your Firestore Database Rules or API Keys.
                </p>
            </div>
        );
    }

    return (
        <div className="blog-list-page">
            {/* Hero */}
            <section className="page-hero blog-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Blog</span>
                    </div>
                    <h1>Expert Insights & Tips</h1>
                    <p>
                        Stay informed with the latest trends, tips, and expert advice on
                        skin and hair care from our dermatologists.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-list section">
                <div className="container">
                    {blogs.length === 0 ? (
                        <div className="no-blogs">
                            <p>No blog posts yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="blogs-grid">
                            {blogs.map((blog, index) => (
                                <Link
                                    to={`/blogs/${blog.slug}`}
                                    className="blog-card card"
                                    key={blog.id}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="blog-image">
                                        <img
                                            src={blog.image || `https://images.unsplash.com/photo-157017261964${(index % 6) + 4}-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                                            alt={blog.title}
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                                            }}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <span className="blog-grid-category">{blog.category}</span>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Calendar size={14} />
                                            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}</span>
                                        </div>
                                        <h3>{blog.title}</h3>
                                        <p>{blog.excerpt}</p>
                                        <span className="read-more">
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogList;
