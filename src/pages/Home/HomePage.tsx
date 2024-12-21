import "./HomeStyles.css";
import Image from "../../components/Image/Image"

interface BlogComponentProps {
  imgUrl: string;
  avatarUrl: string;
  author_name: string;
  read_time: string;
  blog_title: string;
  blog_content: string;
  blog_tags: string[];
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
        <div className="blog_tags">{blog_tags.join(', ')}</div>
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
  return (
    <div className="home-container">
      {/* Welcome Container */}
      <div className="intro-container">
        <div className="welcome-text">WELCOME TO BLOGIN</div>
        <div className="welcome-intro-one">
          Craft Narratives ✍️ that ignite <span className="special-effect">inspiration</span> 💡,
        </div>
        <div className="welcome-intro-two">
          <span className="special-effect">knowledge</span> 📕, and <span className="special-effect">entertainment</span> 🎬
        </div>
      </div>

      {/* Featured Blog Section */}
      <div className="featured-blog-section">
        <div className="blog-title">Featured Blog</div>
        <div className="sub-blog-title">Dive into our latest story</div>
        <BlogComponent
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          author_name="Binit Lenka"
          read_time="12 minutes read"
          blog_title="Something only we know"
          blog_content="What can be common between two of us?"
          blog_tags={["tag1", "tag2"]}
        />
      </div>
      <div className="latest_blog_container">
        <div className="latest_blog_title">Latest Blog</div>
        <button className="see_all_button">See All</button>
      </div>
      <div className="blogs_latest">
        <BlogContainer
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          author_name="Binit Lenka"
          read_time="12 minutes read"
          blog_title="Something only we know"
          blog_content="What can be common between two of us?"
          blog_tags={["tag1", "tag2"]}
        />
        <BlogContainer
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          author_name="Binit Lenka"
          read_time="12 minutes read"
          blog_title="Something only we know"
          blog_content="What can be common between two of us?"
          blog_tags={["tag1", "tag2"]}
        />
        <BlogContainer
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          author_name="Binit Lenka"
          read_time="12 minutes read"
          blog_title="Something only we know"
          blog_content="What can be common between two of us?"
          blog_tags={["tag1", "tag2"]}
        />
        <BlogContainer
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          author_name="Binit Lenka"
          read_time="12 minutes read"
          blog_title="Something only we know"
          blog_content="What can be common between two of us?"
          blog_tags={["tag1", "tag2"]}
        />
      </div>
    </div>
  );
};

export default Home;

