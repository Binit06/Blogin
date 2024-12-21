import { Edit, Delete, Archive } from "@mui/icons-material";
import './Blogs.css';

const blogData = [
  {
    id: "1",
    title: "How to Write Better Code",
    date: "2024-12-21",
    content: "Writing clean and maintainable code is essential for long-term success. Here's how you can improve your coding habits...",
  },
  {
    id: "1",
    title: "React vs Vue: A Comparison",
    date: "2024-11-18",
    content: "React and Vue are both excellent front-end frameworks. This blog post compares the two, highlighting their differences...",
  },
  // Add more blogs as needed
];

const handleEditClick = (id: string) => {
  console.log(id)
}


const handleDeleteClick = (id: string) => {
  console.log(id)
}

const handleArchiveClick = (id: string) => {
  console.log(id)
}
const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-list">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="card-header">
              <h2 className="blog-title">{blog.title}</h2>
              <span className="blog-date">{blog.date}</span>
            </div>
            <p className="blog-content">
              {blog.content.slice(0, 100)}...
            </p>
            <div className="button-group">
              <button className="action-btn edit-btn" onClick={() => { handleEditClick(blog.id) }}>
                <Edit />
                Edit
              </button>
              <button className="action-btn delete-btn" onClick={() => { handleDeleteClick(blog.id) }}>
                <Delete />
                Delete
              </button>
              <button className="action-btn archive-btn" onClick={() => { handleArchiveClick(blog.id) }}>
                <Archive />
                Archive
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

