import './Blogs.css';

interface BlogProps {
  id: string;
  genere: string;
  title: string;
  description: string;
  ert: string;
}
const BlogsComponent: React.FC<BlogProps> = ({ genere, title, description, ert, id }) => {
  const handleClick = () => {
    console.log(id);
  }
  return (
    <div className="blog_container">
      <div className="blog_genere">{genere}</div>
      <div className="blog_title" onClick={handleClick}>{title}</div>
      <div className="blog_description">{description}</div>
      <div className="blog_ert">{ert}</div>
    </div>
  )
}

const Blogs = () => {
  return (
    <div className="blog_main">
      <div className="title_container">
        <div className="title">
          Stories
        </div>
        <div className="title_metadata">
          <div className="date">{"This week"}</div>
          <div>.</div>
          <div className="stories">{"3 stories"}</div>
        </div>
      </div>
      <div className="blog_main_container">
        <BlogsComponent genere="Ethics" title="Unethical Design of Cookie Windows" description="All the sites we visit today contains tradcker called cookies. These cookies always track our internet footprint and coolect data about us..." ert="6 min" id='1' />
        <BlogsComponent genere="Ethics" title="Unethical Design of Cookie Windows" description="I will write it later" ert="6 min" id='2' />
        <BlogsComponent genere="Ethics" title="Unethical Design of Cookie Windows" description="I will write it later" ert="6 min" id='3' />
      </div>
    </div>
  );
};

export default Blogs;

