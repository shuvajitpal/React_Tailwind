import React, { useState, useEffect } from "react";
import "./styles/style.css";

const appData = {
  courses: [
    {
      id: 1,
      title: "Foundation Java with DSA",
      description: "Master Java programming fundamentals and data structures & algorithms",
      duration: "6 months",
      difficulty: "Beginner to Advanced",
      price: "₹15,000",
      rating: 4.6,
      technologies: ["Java", "DSA", "OOP"],
      features: ["Live Classes", "1:1 Mentorship", "Placement Support"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description: "Complete web development bootcamp with modern technologies",
      duration: "9 months",
      difficulty: "Beginner to Advanced", 
      price: "₹25,000",
      rating: 4.5,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      features: ["Job Bootcamp", "Real Projects", "Industry Mentorship"]
    },
    {
      id: 3,
      title: "Data Science & Machine Learning",
      description: "Comprehensive data science course with hands-on projects",
      duration: "8 months",
      difficulty: "Intermediate",
      price: "₹30,000", 
      rating: 4.8,
      technologies: ["Python", "ML", "AI", "Statistics"],
      features: ["Live Projects", "Industry Datasets", "Expert Mentorship"]
    },
    {
      id: 4,
      title: "System Design Course",
      description: "Master scalable system architecture and design patterns",
      duration: "4 months",
      difficulty: "Advanced",
      price: "₹20,000",
      rating: 4.7,
      technologies: ["System Architecture", "Scalability", "Databases"],
      features: ["MAANG Focus", "Case Studies", "Mock Interviews"]
    },
    {
      id: 5,
      title: "Competitive Programming",
      description: "Excel in coding competitions and technical interviews",
      duration: "5 months",
      difficulty: "Intermediate to Advanced",
      price: "₹18,000",
      rating: 4.4,
      technologies: ["C++", "Algorithms", "Problem Solving"],
      features: ["Contest Practice", "Interview Prep", "Expert Guidance"]
    },
    {
      id: 6,
      title: "Android App Development",
      description: "Build native Android applications with modern tools",
      duration: "6 months",
      difficulty: "Beginner to Intermediate",
      price: "₹22,000",
      rating: 4.0,
      technologies: ["Java", "Kotlin", "Android SDK"],
      features: ["Play Store Apps", "Industry Projects", "Live Sessions"]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "Google",
      role: "Software Engineer",
      content: "Coding Ninjas transformed my career. The DSA course was comprehensive and the mentorship helped me crack Google interview.",
      course: "Foundation Java with DSA"
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Microsoft",
      role: "Full Stack Developer",
      content: "The web development bootcamp gave me hands-on experience with real projects. Now I'm working at Microsoft!",
      course: "Full Stack Web Development"
    },
    {
      id: 3,
      name: "Amit Kumar",
      company: "Amazon",
      role: "Data Scientist",
      content: "Excellent machine learning course with practical projects. The instructors are industry experts.",
      course: "Data Science & ML"
    }
  ],
  features: [
    { icon: "👨‍🏫", title: "Expert Mentorship", description: "Learn from industry veterans with experience at top companies" },
    { icon: "🎥", title: "Live Classes", description: "Interactive live sessions with doubt resolution and Q&A" },
    { icon: "🚀", title: "Real-world Projects", description: "Build portfolio-worthy projects used by real companies" },
    { icon: "💼", title: "Placement Support", description: "78% placement rate with 300+ hiring partner companies" },
    { icon: "🤝", title: "1:1 Doubt Resolution", description: "Get personalized help from teaching assistants anytime" },
    { icon: "🏆", title: "Industry Recognition", description: "Best Education Startup Award 2020 winner" }
  ],
  stats: [
    { number: "100+", label: "Expert Mentors" },
    { number: "300+", label: "Placement Partners" },
    { number: "78%", label: "Placement Rate" },
    { number: "17+", label: "Courses Offered" }
  ]
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState(null);

  const getCourseIcon = (title) => {
    const iconMap = {
      "Foundation Java with DSA": "☕",
      "Full Stack Web Development": "🌐",
      "Data Science & Machine Learning": "🤖",
      "System Design Course": "🏗️",
      "Competitive Programming": "🏆",
      "Android App Development": "📱"
    };
    return iconMap[title] || "💻";
  };

  const enrollInCourse = (course) => {
    setNotification(`Interest registered for "${course.title}"! Our team will contact you soon.`);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredCourses = appData.courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {/* Mobile Menu */}
      <header className="header p-4 flex items-center justify-between bg-gray-100 shadow-md mb-16">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="px-4 py-2 text-lg font-semibold bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
        {mobileMenuOpen && (
          <nav className="mobile-nav flex flex-col gap-2 mt-2">
            <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#courses" className="hover:text-orange-500">Courses</a>
          <a href="#features" className="hover:text-orange-500">Features</a>
          <a href="#testimonials" className="hover:text-orange-500">Testimonials</a></nav>
        )}
      </header>

      {/* Notification */}
      {notification && (
        <div className="notification mb-16">{notification}</div>
      )}

      {/* Stats */}
      <section id="stats" className="stats-grid mb-16">
        {appData.stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Search */}
      <div className="my-8">
        <input
          id="courseSearch"
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Courses */}
      <section id="courses" className="course-grid grid gap-6 px-4 mb-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="course-image text-4xl">{getCourseIcon(course.title)}</div>
            <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
            <p className="text-gray-600 mt-1">{course.description}</p>
            <div className="course-meta flex justify-between mt-2 text-sm text-gray-500">
              <span>{course.price}</span>
              <span>★ {course.rating}</span>
            </div>
            <div className="course-technologies flex flex-wrap gap-2 mt-2">
              {course.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">{tech}</span>
              ))}
            </div>
            <button
              onClick={() => enrollInCourse(course)}
              className="mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="features-grid grid gap-6 px-4 mb-16">
        {appData.features.map((feature, i) => (
          <div key={i} className="feature-card">
            <span>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-grid grid gap-6 px-4 mb-16">
        {appData.testimonials.map(t => (
          <div key={t.id} className="testimonial-card p-4 bg-gray-50 rounded-lg shadow">
            <p className="italic">"{t.content}"</p>
            <div className="testimonial-author flex items-center gap-3 mt-3">
              <div className="author-avatar w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="author-info text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-gray-500">{t.role} at <span className="font-medium">{t.company}</span></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;