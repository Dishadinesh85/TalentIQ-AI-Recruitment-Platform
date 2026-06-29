function CandidateTable() {

  const candidates = [

    {
      name: "Disha Poojary",
      role: "Data Analyst",
      score: 85,
      status: "Shortlisted"
    },

    {
      name: "Rahul",
      role: "Data Analyst",
      score: 78,
      status: "Review"
    },

    {
      name: "Priya",
      role: "Data Analyst",
      score: 72,
      status: "Pending"
    }

  ];

  return (

    <div className="card">

      <h2>👥 Candidate Comparison</h2>

      <table className="candidate-table">

        <thead>

          <tr>

            <th>Name</th>
            <th>Role</th>
            <th>Score</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {candidates.map((candidate, index) => (

            <tr key={index}>

              <td>{candidate.name}</td>

              <td>{candidate.role}</td>

              <td>{candidate.score}%</td>

              <td>{candidate.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default CandidateTable;