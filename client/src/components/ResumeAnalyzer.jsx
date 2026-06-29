import {useState} from "react";


function ResumeAnalyzer(){


const [file,setFile]=useState(null);

const [result,setResult]=useState(null);



async function analyze(){


const formData=new FormData();


formData.append(

"resume",

file

);




const res=await fetch(

"https://talentiq-ai-recruitment-platform.onrender.com/analyze-resume",

{

method:"POST",

body:formData

}

);



const data=await res.json();



setResult(data);



}




return(

<div className="resume-card">


<h2>

📄 Resume Intelligence

</h2>


<input

type="file"

onChange={(e)=>setFile(e.target.files[0])}

/>


<button onClick={analyze}>

Analyze Resume

</button>



{

result &&

<div>


<h3>

Score:

{result.matchScore}%

</h3>


<p>

{result.recommendation}

</p>


</div>


}



</div>

)

}


export default ResumeAnalyzer;