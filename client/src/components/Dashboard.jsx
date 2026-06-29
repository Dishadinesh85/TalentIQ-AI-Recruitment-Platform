import ActionButtons from "./ActionButtons";
import ResumeAnalyzer from "./ResumeAnalyzer";
import AnalyticsChart from "./AnalyticsChart";
import ResumeMatch from "./ResumeMatch";
import SkillRadar from "./SkillRadar";
import CandidateTable from "./CandidateTable";

function Dashboard({ sendMessage, chat }) {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="header">
        <h1>TalentIQ AI</h1>

<p>
AI-Powered Recruitment Intelligence Platform
</p>

        <p>
          Resume Screening • Candidate Evaluation • Interview Simulation • Hiring Analytics
        </p>
      </div>

      {/* KPI SECTION */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <h3>Applications</h3>
          <h1>248</h1>
        </div>

        <div className="kpi-card">
          <h3>Shortlisted</h3>
          <h1>42</h1>
        </div>

        <div className="kpi-card">
          <h3>Interviews</h3>
          <h1>18</h1>
        </div>

        <div className="kpi-card">
          <h3>Hire Rate</h3>
          <h1>84%</h1>
        </div>

      </div>

      {/* TOP CARDS */}
      <div className="cards">

        {/* Candidate Profile */}
        <div className="card">

          <h2>👤 Candidate Profile</h2>

          <h3>Disha Poojary</h3>

          <p>
            Role:
            <strong> Data Analyst</strong>
          </p>

          <p>
            Experience:
            <strong> Fresher</strong>
          </p>

          <p>
            CGPA:
            <strong> 8.22</strong>
          </p>

          <span className="status">
            🟢 Shortlisted
          </span>

        </div>

        {/* Resume Match */}
        <ResumeMatch />

        {/* Skills */}
        <div className="card">

          <h2>🧠 Skill Intelligence</h2>

          <div className="skill-row">
            <span>Python</span>
            <span>90%</span>
          </div>

          <div className="skill-row">
            <span>SQL</span>
            <span>85%</span>
          </div>

          <div className="skill-row">
            <span>Power BI</span>
            <span>80%</span>
          </div>

          <div className="skill-row">
            <span>Machine Learning</span>
            <span>75%</span>
          </div>

          <div className="skill-row">
            <span>Statistics</span>
            <span>88%</span>
          </div>

        </div>

      </div>

      {/* AI INSIGHTS */}
      <div className="section">

        <h2>🤖 AI Hiring Insights</h2>

        <div className="message">
          ✅ Resume matches Data Analyst role by 85%
        </div>

        <div className="message">
          ✅ Strong Python and SQL proficiency detected
        </div>

        <div className="message">
          ✅ Recommended for Technical Interview Round
        </div>

        <div className="message">
          📈 Confidence Score: 89%
        </div>

      </div>

      {/* RECRUITER ACTIONS */}
      <div className="section">

        <h2>🎯 Recruiter Actions</h2>

        <ActionButtons sendMessage={sendMessage} />

      </div>

      {/* ANALYTICS */}
      <div className="section">

        <h2>📊 Interview Analytics</h2>

        <AnalyticsChart />

      </div>

      {/* SKILL RADAR */}
      <div className="section">

        <h2>🎯 Skill Radar Analysis</h2>

        <SkillRadar />

      </div>

      {/* CANDIDATE TABLE */}
      <div className="section">

        <CandidateTable />

      </div>

      {/* HIRING RECOMMENDATION */}
      <div className="section">

        <h2>🚀 AI Hiring Recommendation</h2>

        <div className="message">
          Overall Match Score: 85%
        </div>

        <div className="message">
          Strengths: Python, SQL, Statistics, Power BI
        </div>

        <div className="message">
          Weaknesses: Limited Industry Experience
        </div>

        <div className="message">
          ✅ Recommendation: Move To Next Round
        </div>

      </div>

      {/* RESUME ANALYZER */}
      <div className="section">

        <ResumeAnalyzer />

      </div>

      {/* PIPELINE */}
      <div className="section">

        <h2>📋 Hiring Pipeline</h2>

        <div className="pipeline">

          <div className="stage">Applied</div>
          <div className="arrow">↓</div>

          <div className="stage">Screened</div>
          <div className="arrow">↓</div>

          <div className="stage">Interviewed</div>
          <div className="arrow">↓</div>

          <div className="stage">Shortlisted</div>
          <div className="arrow">↓</div>

          <div className="stage hired">Selected</div>

        </div>

      </div>

      {/* CHAT */}
      <div className="section chat">

        <h2>💬 AI Recruiter Assistant</h2>

        {chat.length === 0 ? (

          <div className="message">
            Start an interview or evaluate a candidate.
          </div>

        ) : (

          chat.map((item, index) => (

            <div
              className="message"
              key={index}
            >

              <p>
                <strong>You:</strong> {item.user}
              </p>

              <p>
                <strong>AI:</strong> {item.ai}
              </p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Dashboard;