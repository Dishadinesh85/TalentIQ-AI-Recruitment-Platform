function ResumeMatch() {

  const score = 85;

  return (

    <div className="match-card">

      <h2>📄 Resume Match</h2>

      <div className="circle">

        <div className="inner-circle">

          <h1>{score}%</h1>

          <p>Match Score</p>

        </div>

      </div>

    </div>

  );

}

export default ResumeMatch;