export default function CandidateRanking() {

  const candidates = [
    { name: "Asha", score: 92, status: "Selected" },
    { name: "Rahul", score: 85, status: "Hold" },
    { name: "Neha", score: 78, status: "Rejected" }
  ];

  return (
    <div className="card">
      <h3>Candidate Ranking</h3>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((c, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{c.name}</td>
              <td>{c.score}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}