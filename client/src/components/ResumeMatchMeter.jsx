export default function ResumeMatchMeter() {

  const score = 78;

  return (
    <div className="card">
      <h3>Resume Match</h3>

      <div style={{
        height: "20px",
        background: "#eee",
        borderRadius: "10px"
      }}>
        <div style={{
          width: `${score}%`,
          background: "linear-gradient(90deg,#4facfe,#00f2fe)",
          height: "100%",
          borderRadius: "10px"
        }} />
      </div>

      <p>{score}% Match with Job Description</p>
    </div>
  );
}