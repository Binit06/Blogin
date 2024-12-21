import './Blogs.css';

interface BlogProps {
  id: string;
  genere: string;
  title: string;
  description: string;
  ert: string;
}
const BlogsManageComponent: React.FC<BlogProps> = ({ genere, title, description, ert, id }) => {
  const handleClick = () => {
    console.log(id);
  }
  return (
    <div className="blog_manage_container">
      <div className="blog_manage_genere">{genere}</div>
      <div className="blog_manage_title" onClick={handleClick}>{title}</div>
      <div className="blog_manage_description">{description}</div>
      <div className="blog_manage_ert">{ert}</div>
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
        <BlogsManageComponent genere="Ethics" title="Unethical Design of Cookie Windows" description="All the sites we visit today contains tradcker called cookies. These cookies always track our internet footprint and coolect data about us..." ert="6 min" id='1' />
        <BlogsManageComponent genere="Ethics" title="Unethical Design of Cookie Windows" description="I will write it later" ert="6 min" id='2' />
        <BlogsManageComponent genere="Ethics" title="Unethical Design of Cookie Windows" description="I will write it later" ert="6 min" id='3' />
      </div>
    </div>
  );
};

export default Blogs;

