import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useBlog } from '../../context/BlogContext';
import './BlogHighlights.css';

const BlogHighlights = () => {
    const { getLatestBlogs } = useBlog();
    const latestBlogs = getLatestBlogs(3);

    return (
        <section className="blog-highlights-section section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Latest Insights</span>
                    <h2 className="section-title">Expert Skin & Hair Care Tips</h2>
                    <p className="section-subtitle">
                        Stay informed with the latest trends, tips, and insights from our
                        dermatology experts.
                    </p>
                </div>

                <div className="blogs-grid">
                    {latestBlogs.map((blog, index) => (
                        <Link
                            to={`/blogs/${blog.slug}`}
                            className="blog-card card"
                            key={blog.id}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="blog-image">
                                <img
                                    src={`https://images.unsplash.com/photo-157017261964${index + 4}-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                                    alt={blog.title}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                                    }}
                                />
                                <span className="blog-category">{blog.category}</span>
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
                                    Read More <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="blog-cta">
                    <Link to="/blogs" className="btn btn-secondary btn-lg">
                        View All Articles
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogHighlights;
