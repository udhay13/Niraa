import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Plus,
    Edit,
    Trash2,
    LogOut,
    Eye,
    EyeOff,
    Save,
    X,
    FileText
} from 'lucide-react';
import { useBlog } from '../../context/BlogContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const {
        blogs,
        isAdmin,
        logout,
        addBlog,
        updateBlog,
        deleteBlog
    } = useBlog();
    const navigate = useNavigate();

    const [showEditor, setShowEditor] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Skin Care',
        tags: '',
        isPublished: false
    });

    useEffect(() => {
        if (!isAdmin) {
            navigate('/admin');
        }
    }, [isAdmin, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/admin');
    };

    const handleNewPost = () => {
        setEditingBlog(null);
        setFormData({
            title: '',
            excerpt: '',
            content: '',
            category: 'Skin Care',
            tags: '',
            isPublished: false
        });
        setShowEditor(true);
    };

    const handleEdit = (blog) => {
        setEditingBlog(blog);
        setFormData({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
            category: blog.category,
            tags: blog.tags ? blog.tags.join(', ') : '',
            isPublished: blog.isPublished
        });
        setShowEditor(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            deleteBlog(id);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();

        const blogData = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            author: 'Dr. Nira Team'
        };

        if (editingBlog) {
            updateBlog(editingBlog.id, blogData);
        } else {
            addBlog(blogData);
        }

        setShowEditor(false);
        setEditingBlog(null);
    };

    if (!isAdmin) {
        return null;
    }

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <Link to="/" className="admin-logo">
                        <span className="logo-text">Niraa</span>
                        <span className="logo-accent">Admin</span>
                    </Link>
                </div>

                <nav className="sidebar-nav">
                    <button className="nav-item active">
                        <FileText size={20} />
                        <span>Blog Posts</span>
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <h1>Blog Management</h1>
                    <button className="btn btn-primary" onClick={handleNewPost}>
                        <Plus size={18} />
                        New Post
                    </button>
                </header>

                {/* Blog List */}
                <div className="blogs-table-wrapper">
                    <table className="blogs-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map(blog => (
                                <tr key={blog.id}>
                                    <td className="title-cell">
                                        <span className="blog-title">{blog.title}</span>
                                        <span className="blog-excerpt">{blog.excerpt}</span>
                                    </td>
                                    <td>
                                        <span className="category-badge">{blog.category}</span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${blog.isPublished ? 'published' : 'draft'}`}>
                                            {blog.isPublished ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="date-cell">
                                        {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </td>
                                    <td className="actions-cell">
                                        {blog.isPublished && (
                                            <Link
                                                to={`/blogs/${blog.slug}`}
                                                className="action-btn view"
                                                target="_blank"
                                                title="View"
                                            >
                                                <Eye size={18} />
                                            </Link>
                                        )}
                                        <button
                                            className="action-btn edit"
                                            onClick={() => handleEdit(blog)}
                                            title="Edit"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            className="action-btn delete"
                                            onClick={() => handleDelete(blog.id)}
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Editor Modal */}
            {showEditor && (
                <div className="editor-modal">
                    <div className="editor-backdrop" onClick={() => setShowEditor(false)}></div>
                    <div className="editor-content card">
                        <div className="editor-header">
                            <h2>{editingBlog ? 'Edit Post' : 'New Post'}</h2>
                            <button className="close-btn" onClick={() => setShowEditor(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="editor-form">
                            <div className="form-group">
                                <label className="form-label">Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="form-input form-select"
                                    >
                                        <option value="Skin Care">Skin Care</option>
                                        <option value="Hair Care">Hair Care</option>
                                        <option value="Hair Removal">Hair Removal</option>
                                        <option value="Anti-Aging">Anti-Aging</option>
                                        <option value="Treatments">Treatments</option>
                                        <option value="Tips">Tips & Advice</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Tags (comma-separated)</label>
                                    <input
                                        type="text"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="e.g. acne, skincare, tips"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Excerpt *</label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleChange}
                                    className="form-input"
                                    rows="2"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Content * (Markdown supported)</label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    className="form-input content-textarea"
                                    rows="15"
                                    required
                                ></textarea>
                            </div>

                            <label className="form-checkbox publish-toggle">
                                <input
                                    type="checkbox"
                                    name="isPublished"
                                    checked={formData.isPublished}
                                    onChange={handleChange}
                                />
                                <span>Publish this post</span>
                            </label>

                            <div className="editor-actions">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowEditor(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    <Save size={18} />
                                    {editingBlog ? 'Update Post' : 'Create Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
