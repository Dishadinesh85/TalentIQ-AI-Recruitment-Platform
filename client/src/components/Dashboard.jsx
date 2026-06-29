import ProfileCard from "./ProfileCard";
import ResumeMatch from "./ResumeMatch";
import SkillRadar from "./SkillRadar";
import AnalyticsChart from "./AnalyticsChart";
import InterviewScoreChart from "./InterviewScoreChart";
import CandidateRanking from "./CandidateRanking";
import ActionButtons from "./ActionButtons";
import ChatBox from "./ChatBox";

function Dashboard({ chat, sendMessage, score }) {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>🤖 TalentIQ AI</h1>
        <p>
          AI-Powered Recruitment Intelligence Platform
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="stats-grid">

        <div className="stat-card">
          <h3>Applications</h3>
          <h1>248</h1>
        </div>

        <div className="stat-card">
          <h3>Shortlisted</h3>
          <h1>42</h1>
        </div>

        <div className="stat-card">
          <h3>Interviews</h3>
          <h1>18</h1>
        </div>

        <div className="stat-card">
          <h3>Hire Rate</h3>
          <h1>84%</h1>
        </div>

      </div>

      {/* PROFILE */}
      <div className="top-grid">

        <ProfileCard />

        <ResumeMatch />

        <SkillRadar />

      </div>

      {/* CHARTS */}
      <div className="chart-grid">

        <AnalyticsChart />

        <InterviewScoreChart />

      </div>

      {/* CANDIDATE RANKING */}
      <CandidateRanking />

      {/* ACTION BUTTONS */}
      <ActionButtons sendMessage={sendMessage} />

      {/* CHAT */}
      <ChatBox
        chat={chat}
        sendMessage={sendMessage}
      />

    </div>
  );
}

export default Dashboard;