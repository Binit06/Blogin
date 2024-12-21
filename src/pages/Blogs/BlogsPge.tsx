import { useEffect, useState } from 'react';
import axios from "axios"
import './Blogs.css';
import { useNavigate } from 'react-router-dom';

interface BlogProps {
  id: string;
  genere: string;
  title: string;
  description: string;
  ert: string;
}

export interface BlogResponse {
  _id: string;
  authorEmail: string;
  authorName: string;
  content: string;
  createdAt: string;
  ert: string;
  genre: string;
  imageUrl: string;
  title: string;
}

const BlogsManageComponent: React.FC<BlogProps> = ({ genere, title, description, ert, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blog/" + id)
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
  const [data, setData] = useState<BlogResponse[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000" + "/api/posts")
        setData(response.data as BlogResponse[]);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])
  return (
    <div className="blog_main">
      <div className="title_container">
        <div className="title">
          Stories
        </div>
        <div className="title_metadata">
          <div className="date">{"This week"}</div>
          <div>.</div>
          <div className="stories">{data.length + " stories"}</div>
        </div>
      </div>
      <div className="blog_main_container">
        {data.map((value: BlogResponse) => (
          <BlogsManageComponent key={value._id} id={value._id} genere={value.genre} title={value.title} description={value.content} ert={value.ert} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

