
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chatroom');
  };

  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1 className="hero-title">Social Sight AI</h1>
        <p className="hero-subtitle">
          Revolutionize your social media strategy with AI-powered analytics. Uncover hidden insights, drive engagement, and accelerate growth with our cutting-edge platform.
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Start Your Journey
        </button>
      </section>

      <section className="workflow-section">
        <h2 className="workflow-title">Our Intelligent Workflow</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Data Collection</h3>
              <p>Seamlessly gather social media data across multiple platforms</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>AI-Powered Preprocessing</h3>
              <p>Intelligently clean and structure data for optimal analysis</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Advanced LLM Processing</h3>
              <p>Leverage state-of-the-art language models to extract meaningful insights</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>RAG Enhancement</h3>
              <p>Implement Retrieval-Augmented Generation for unparalleled accuracy and context</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Strategic Insight Generation</h3>
              <p>Transform raw data into actionable strategies and recommendations</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p>© 2025 Social Sight AI. Made with ❤️ by Krusy Krabs</p>
      </footer>
    </div>
  );
}

export default LandingPage;

