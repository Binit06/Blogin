import "./HomeStyles.css"; // Make sure to import the CSS file

const sections = [
  {
    title: "Round 1: Mettl",
    imageUrl: "https://picsum.photos/200?random=1", // Random image
    tags: ["Coding", "Interview", "Microsoft"],
    content: "In the given array, print the 3rd largest number?",
  },
  {
    title: "Round 2: Virtual Interview",
    imageUrl: "https://picsum.photos/200?random=2", // Random image
    tags: ["DSA", "Queue", "Interview"],
    content: "Explain the BFS traversal approach.",
  },
  {
    title: "Round 3: Onsite Interview",
    imageUrl: "https://picsum.photos/200?random=3", // Random image
    tags: ["System Design", "AWS", "Microsoft"],
    content: "Design WhatsApp?",
  },
  {
    title: "Round 4: HR Round",
    imageUrl: "https://picsum.photos/200?random=4", // Random image
    tags: ["HR", "Interview", "Microsoft"],
    content: "What would you like to do at Microsoft?",
  },
  {
    title: "Round 5: Hackathon",
    imageUrl: "https://picsum.photos/200?random=5", // Random image
    tags: ["Hackathon", "Projects", "Innovation"],
    content: "Explain your hackathon projects.",
  },
  {
    title: "Round 6: System Design",
    imageUrl: "https://picsum.photos/200?random=6", // Random image
    tags: ["Design", "Scalability", "System"],
    content: "Design a scalable system for a messaging app.",
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-container">
        <div className="welcome-text">WELCOME TO BLOGIN</div>
        <div className="welcome-intro-one">Craft Narratives ✍️ that ignite <span className="special-effect">inspiration</span> 💡,</div>
        <div className="welcome-intro-two"><span className="special-effect">knowledge</span> 📕, and <span className="special-effect">entertainment</span> 🎬</div>
      </div>

      <div className="grid-container">
        {sections.map((section, index) => (
          <div key={index} className="box">
            <img src={section.imageUrl} alt={section.title} className="box-image" />
            <div className="overlay">
              <h3 className="box-title">{section.title}</h3>
              <div className="tags">
                {section.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="box-content">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

