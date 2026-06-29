function ScoreCard({score}){


return(

<div className="score-card">


<h2>
📊 AI Candidate Score
</h2>


<div className="circle">

{score || "--"}%

</div>


<h3>

{
score >= 80
?
"🔥 Strong Hire"
:
"⚠ Needs Review"

}

</h3>



<div className="skill">

Python

<div className="bar">

<span style={{width:"90%"}}></span>

</div>

</div>



<div className="skill">

SQL

<div className="bar">

<span style={{width:"85%"}}></span>

</div>

</div>



<div className="skill">

Projects

<div className="bar">

<span style={{width:"95%"}}></span>

</div>

</div>



</div>

)

}


export default ScoreCard;