
import { useState } from "react";
import "./App.css";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: "</>",
    skills: ["C", "Python", "Java", "JavaScript"],
  },
  {
    title: "Full-Stack Development",
    icon: "WEB",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Problem Solving",
    icon: "DSA",
    skills: [
      "Data Structures",
      "Algorithms",
      "DSA Practice",
      "Debugging",
    ],
  },
  {
    title: "AI & Data Analytics",
    icon: "AI",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Data Visualization",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          arkap<span>.</span>dev
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Let's connect ↗
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="hero section-wrap" id="home">
          <div className="hero-copy">
            {/* Profile Picture */}
            <div className="profile-photo">
              <img
                src="/profileimage.jpeg"
                alt="Arkapravo Kesh"
                onError={(event) => {
                  console.error(
                    "Profile picture failed to load:",
                    event.currentTarget.src
                  );
                }}
              />
            </div>

            {/* Updated Professional Badge */}
            <div className="availability">
              <span className="status-dot" />
              Engineer and Innovator
            </div>

            <p className="eyebrow">
              Developer · Problem Solver · Lifelong Learner
            </p>

            <h1>
              Building useful things with <span>code.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm Arkapravo Kesh, a Computer Science and
              Engineering student passionate about programming,
              full-stack development, solving DSA problems, and
              exploring AI/ML and data analytics.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#skills"
              >
                Explore my skills ↓
              </a>

              <a
                className="button button-quiet"
                href="#contact"
              >
                Contact me ↗
              </a>
            </div>

            <p className="hero-note">
              Always learning, building my skills, and looking
              for opportunities to grow.
            </p>
          </div>

          {/* Developer Card */}
          <div className="developer-card">
            <div className="card-glow" />

            <div className="card-topline">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              developer.js
            </div>

            <div className="code-content">
              <p className="code-muted">
                // My developer mindset
              </p>

              <p>
                <span className="code-purple">const</span>{" "}
                growth = {"{"}
              </p>

              <p className="indent">
                curiosity:{" "}
                <span className="code-green">true</span>,
              </p>

              <p className="indent">
                practice:{" "}
                <span className="code-green">
                  "every day"
                </span>
                ,
              </p>

              <p className="indent">
                nextGoal:{" "}
                <span className="code-green">
                  "AI + ML"
                </span>
              </p>

              <p>{"};"}</p>
            </div>

            <div className="mini-stats">
              <div>
                <strong>04</strong>
                <span>Languages</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Core Areas</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>To Learn</span>
              </div>
            </div>
          </div>
        </header>

        {/* About Me */}
        <section
          className="section section-muted"
          id="about"
        >
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">About Me</p>

                <h2>
                  Curious by nature.
                  <br />
                  Builder by choice.
                </h2>
              </div>

              <p className="section-intro">
                I enjoy strengthening my programming fundamentals,
                solving challenging problems, learning new
                technologies, and developing my skills through
                practical experience.
              </p>
            </div>

            <div className="about-grid">
              {/* Hobbies */}
              <div className="about-panel">
                <p className="panel-label">
                  BEYOND THE SCREEN
                </p>

                <h3>
                  Technology is my passion, and learning is
                  my mindset.
                </h3>

                <p>
                  Outside coding, I enjoy playing cricket,
                  bike riding, and traveling. I love exploring
                  new places, discovering new ideas, and
                  continuously improving myself.
                </p>

                <div className="interest-row">
                  <span className="interest-icon">🏏</span>

                  <div>
                    <strong>Cricket</strong>
                    <small>Teamwork and strategy</small>
                  </div>
                </div>

                <div className="interest-row">
                  <span className="interest-icon">🏍️</span>

                  <div>
                    <strong>Bike Riding</strong>
                    <small>New roads, new perspectives</small>
                  </div>
                </div>

                <div className="interest-row">
                  <span className="interest-icon">🌍</span>

                  <div>
                    <strong>Travel</strong>
                    <small>Exploring the world</small>
                  </div>
                </div>
              </div>

              {/* Education and Learning */}
              <div className="journey-panel">
                <p className="eyebrow">My Journey</p>

                <div className="timeline">
                  <div className="timeline-item">
                    <span className="timeline-marker" />

                    <strong>
                      B.Tech — Computer Science & Engineering
                    </strong>

                    <small>Currently in third year</small>

                    <p>
                      Developing a strong foundation in
                      programming, algorithms, and software
                      engineering.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-marker" />

                    <strong>MERN Stack Certification</strong>

                    <small>
                      Full-stack web development
                    </small>

                    <p>
                      Learning to build web applications using
                      MongoDB, Express.js, React, and Node.js.
                    </p>
                  </div>

                  <div className="timeline-item">
                    <span className="timeline-marker" />

                    <strong>AI & Data Analytics</strong>

                    <small>Currently learning</small>

                    <p>
                      Exploring artificial intelligence,
                      machine learning, data analysis, and
                      data-driven problem solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section — No Projects Displayed */}
        <section className="section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">My Toolkit</p>

                <h2>Skills & Technologies</h2>
              </div>

              <p className="section-intro">
                My learning journey covers programming,
                full-stack development, problem solving,
                and AI technologies.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article
                  className="skill-card"
                  key={group.title}
                >
                  <div className="skill-icon">
                    {group.icon}
                  </div>

                  <h3>{group.title}</h3>

                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="fine-print">
              Continuously learning and expanding my
              technical skill set.
            </p>
          </div>
        </section>

        {/* Contact Section — Real Profile Links */}
        <section
          className="section section-muted"
          id="contact"
        >
          <div className="section-wrap">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">LET'S CONNECT</p>

                <h2>
                  Let's learn and grow together.
                </h2>

                <p>
                  I'm interested in connecting with developers,
                  learning from experienced professionals, and
                  exploring internship and collaboration
                  opportunities. Feel free to reach out!
                </p>
              </div>

              <div className="contact-links">
                <a
                  href="https://github.com/Arkapravokesh05"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                >
                  <span>⌘</span> GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/arkapravo-kesh-0471b131a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                >
                  <span>in</span> LinkedIn ↗
                </a>

                <a
                  href="mailto:arkapravokesh@gmail.com"
                  aria-label="Email me"
                >
                  <span>@</span> Email ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Arkapravo Kesh ·
          Built with React
        </span>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
