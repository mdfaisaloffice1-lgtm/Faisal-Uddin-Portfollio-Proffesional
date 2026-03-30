import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Manus AI · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a developer at Manus AI since January 2026, contributing
              to AI-driven web products while simultaneously taking on remote
              freelance projects across multiple international platforms.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Main Developer</h4>
                <h5>Belarc · USA (Remote)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Oct 2024 – Dec 2025. Served as the primary developer for this
              US-based company on a part-time remote contract, handling
              end-to-end development responsibilities alongside freelance
              Shopify work on LinkedIn, Upwork, and Fiverr.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>AR IT Solution</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Jul 2023 – Aug 2024. Developed and maintained client websites,
              worked on UI/UX improvements, and delivered Shopify-based
              solutions for local and international clients.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Developer</h4>
                <h5>BD IT Solutions</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <p>
              2021 – Jun 2023. Began my professional journey here, building
              foundational skills in web development, working on real client
              projects, and growing into a well-rounded developer.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
