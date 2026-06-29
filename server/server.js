import express from "express";
import cors from "cors";
import multer from "multer";


const app = express();


app.use(cors());

app.use(express.json());



// =======================
// MULTER CONFIG
// =======================


const upload = multer({

storage: multer.memoryStorage()

});




// =======================
// VARIABLES
// =======================


let interviewMode = false;

let questionIndex = 0;


let recruiterMode = "Technical";



const interviewQuestions = [


"Explain your Netflix Data Analysis project and the insights you found.",


"How do you handle missing values in a dataset?",


"Explain supervised vs unsupervised learning.",


"How would you optimize a SQL query for better performance?"


];





// =======================
// HOME
// =======================


app.get("/",(req,res)=>{


res.json({

status:"Backend working"

});


});








// =======================
// RESUME ANALYZER
// =======================


app.post(

"/analyze-resume",

upload.single("resume"),

(req,res)=>{


try{


console.log("Resume Uploaded:");

console.log(req.file);



if(!req.file){


return res.status(400).json({

error:"No resume uploaded"

});


}





res.json({

matchScore:85,


skills:[

"Python",

"SQL",

"Power BI",

"Machine Learning"

],


recommendation:

"Strong candidate for Data Analyst role"



});


}


catch(error){


console.log(error);



res.status(500).json({

error:error.message

});


}



}

);








// =======================
// CHAT SYSTEM
// =======================


app.post("/chat",(req,res)=>{



const message = req.body.message.toLowerCase();





// MODES


if(message.includes("technical mode")){


recruiterMode="Technical";


return res.json({

reply:"Switched to Technical Recruiter Mode 👨‍💻"

});


}





if(message.includes("hr mode")){


recruiterMode="HR";


return res.json({

reply:"Switched to HR Recruiter Mode 🧑‍💼"

});


}





if(message.includes("founder mode")){


recruiterMode="Founder";


return res.json({

reply:"Switched to Founder Mode 🚀"

});


}









// START INTERVIEW


if(message.includes("start interview")){


interviewMode=true;

questionIndex=0;



return res.json({

reply:


`Welcome Disha 🎤


Data Analyst Interview Started


Recruiter Mode:

${recruiterMode}


Question 1:


${interviewQuestions[0]}`


});


}







// INTERVIEW ANSWER FLOW


if(interviewMode){



let score=6;



if(message.length>100)

score+=2;



if(message.includes("python") ||

message.includes("sql"))

score+=1;





questionIndex++;





if(questionIndex < interviewQuestions.length){



return res.json({

reply:


`Answer Score:

${score}/10


Feedback:

Good answer. Add technical details and business impact.


Next Question:


${interviewQuestions[questionIndex]}`


});



}

else{


interviewMode=false;



return res.json({

reply:


`Interview Completed 🎉


Final Score:

${score}/10`


});


}


}









// EVALUATION


if(message.includes("evaluate")){


return res.json({

reply:


`Candidate Evaluation Report 📊


Hireability Score:

8.5/10


Strengths:


✅ Python

✅ SQL

✅ Data Analytics

✅ Machine Learning


Weakness:


Needs more project explanation


Decision:


Suitable for Data Analyst role`


});


}









// DEFAULT AI


res.json({

reply:


`AI Recruiter Analysis 🤖


Mode:

${recruiterMode}


Ask me:

- Start interview

- Evaluate candidate

- Technical mode

- HR mode`


});



});









// =======================
// SERVER START
// =======================


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});