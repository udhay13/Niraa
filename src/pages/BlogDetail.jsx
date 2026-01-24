import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { useBlog } from '../context/BlogContext';
import './BlogDetail.css';

const BlogDetail = () => {
    const { slug } = useParams();
    const { getBlogBySlug, getPublishedBlogs, loading } = useBlog();
    const blog = getBlogBySlug(slug);
    const allBlogs = getPublishedBlogs();

    if (loading) {
        return (
            <div className="admin-loading">
                <div className="spinner"></div>
                <p>Loading article...</p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="not-found">
                <div className="container">
                    <h1>Blog Not Found</h1>
                    <p>The article you're looking for doesn't exist.</p>
                    <Link to="/blogs" className="btn btn-primary">
                        View All Articles
                    </Link>
                </div>
            </div>
        );
    }

    const currentIndex = allBlogs.findIndex(b => b.slug === slug);
    const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

    const renderContent = (content) => {
        // Simple markdown-like rendering
        return content
            .split('\n')
            .filter(line => line.trim())
            .map((line, index) => {
                if (line.startsWith('# ')) {
                    return <h1 key={index}>{line.slice(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index}>{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index}>{line.slice(4)}</h3>;
                }
                if (line.startsWith('- ')) {
                    return <li key={index}>{line.slice(2)}</li>;
                }
                if (line.startsWith('---')) {
                    return <hr key={index} />;
                }
                if (line.match(/^\d+\. /)) {
                    return <li key={index}>{line.replace(/^\d+\. /, '')}</li>;
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={index}><strong>{line.slice(2, -2)}</strong></p>;
                }
                if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
                    return <p key={index}><em>{line.slice(1, -1)}</em></p>;
                }
                return <p key={index}>{line}</p>;
            });
    };

    return (
        <div className="blog-detail-page">
            {/* Hero */}
            <section className="blog-detail-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/blogs">Blog</Link>
                        <span>/</span>
                        <span>{blog.title}</span>
                    </div>
                    <span className="blog-category">{blog.category}</span>
                    <h1>{blog.title}</h1>
                    <div className="blog-meta">
                        <div className="meta-item">
                            <User size={16} />
                            <span>{blog.author}</span>
                        </div>
                        <div className="meta-item">
                            <Calendar size={16} />
                            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="blog-content-section section">
                <div className="container">
                    <article className="blog-article">
                        <div className="featured-image">
                            <img
                                src={blog.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
                                alt={blog.title}
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"; }}
                            />
                        </div>
                        <div className="article-content">
                            {blog.excerpt && (
                                <p className="article-lead">
                                    <em>{blog.excerpt}</em>
                                </p>
                            )}
                            <hr className="divider" />
                            {renderContent(blog.content)}
                        </div>

                        {blog.tags && blog.tags.length > 0 && (
                            <div className="article-tags">
                                <span className="tags-label">Tags:</span>
                                {blog.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        )}
                    </article>

                    {/* Navigation */}
                    <nav className="blog-navigation">
                        {prevBlog ? (
                            <Link to={`/blogs/${prevBlog.slug}`} className="nav-link prev">
                                <ArrowLeft size={20} />
                                <div>
                                    <span className="nav-label">Previous Article</span>
                                    <span className="nav-title">{prevBlog.title}</span>
                                </div>
                            </Link>
                        ) : (
                            <div></div>
                        )}
                        {nextBlog && (
                            <Link to={`/blogs/${nextBlog.slug}`} className="nav-link next">
                                <div>
                                    <span className="nav-label">Next Article</span>
                                    <span className="nav-title">{nextBlog.title}</span>
                                </div>
                                <ArrowRight size={20} />
                            </Link>
                        )}
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
