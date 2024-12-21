import "./HomeStyles.css";
import Image from "../../components/Image/Image"
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogResponse } from "../Blogs/BlogsPge";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../utils/constants";

interface BlogComponentProps {
  imgUrl: string;
  avatarUrl: string;
  author_name: string;
  read_time: string;
  blog_title: string;
  blog_content: string;
  blog_tags: string;
}

const BlogComponent: React.FC<BlogComponentProps> = ({
  imgUrl,
  avatarUrl,
  author_name,
  read_time,
  blog_title,
  blog_content,
  blog_tags
}) => {
  return (
    <div className="top-blog-container">
      <Image src={imgUrl} alt="Blog Image" className="top_blog_image" />
      <div className="top_blog_content">
        <div className="publisher_details">
          <Image src={avatarUrl} alt="Publisher Avatar" className="publisher_avatar" />
          <div className="publisher_name">{author_name}</div>
          <div className="read_time">{read_time}</div>
        </div>
        <div className="blog_title">{blog_title}</div>
        <div className="blog_content">{blog_content}</div>
        <div className="blog_tags">{blog_tags}</div>
      </div>
    </div>
  )
}

const BlogContainer: React.FC<BlogComponentProps> = ({
  imgUrl,
  avatarUrl,
  author_name,
  read_time,
  blog_title,
  blog_content,
}) => {
  return (
    <div className="vertical-blog-container">
      <Image src={imgUrl} alt="Blog Image" className="vertical_blog_image" />
      <div className="vertical_blog_content">
        <div className="publisher_details_small">
          <Image src={avatarUrl} alt="Publisher Avatar" className="publisher_avatar" />
          <div>
            <div className="publisher_name_small">{author_name}</div>
            <div className="read_time_small">{read_time}</div>
          </div>
        </div>
        <div className="blog_title_small">{blog_title}</div>
        <div className="blog_content_small">{blog_content}</div>
      </div>
    </div>
  );
};


const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<BlogResponse[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(BACKEND_URL + "api/posts");
      setData(result.data as BlogResponse[])
    }
    fetchData();
}, [])
  return (
    <div className="home-container">
      <div className="intro-container">
        <div className="welcome-text">WELCOME TO BLOGIN</div>
        <div className="welcome-intro-one">
          Craft Narratives ✍️ that ignite <span className="special-effect">inspiration</span> 💡,
        </div>
        <div className="welcome-intro-two">
          <span className="special-effect">knowledge</span> 📕, and <span className="special-effect">entertainment</span> 🎬
        </div>
      </div>
      {data && (
        <div className="featured-blog-section">
          <div className="blog-title">Featured Blog</div>
          <div className="sub-blog-title">Dive into our latest story</div>
          <BlogComponent
            imgUrl={data[0].imageUrl}
            avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
            author_name={data[0].authorName}
            read_time={data[0].ert + " read"}
            blog_title={data[0].title}
            blog_content={data[0].content.slice(0, 200)}
            blog_tags={data[0].genre}
          />
        </div>
      )}
      <div className="latest_blog_container">
        <div className="latest_blog_title">Latest Blog</div>
        <button className="see_all_button" onClick={() => {navigate('/manage')}}>See All</button>
      </div>
      <div className="blogs_latest">
        {data?.slice(0, 4).map((value) => (
          <BlogContainer 
          imgUrl={value.imageUrl}
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          author_name={value.authorName}
          read_time={value.ert + " read"}
          blog_title={value.title}
          blog_content={value.content}
          blog_tags={value.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

