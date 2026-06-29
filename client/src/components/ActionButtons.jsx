function ActionButtons({sendMessage}){


return(

<div>


<h2>
Recruiter Actions
</h2>


<button onClick={()=>sendMessage("start interview")}>

🎤 Start Interview

</button>



<button onClick={()=>sendMessage("evaluate candidate")}>

📊 Evaluate Candidate

</button>




<button onClick={()=>sendMessage("technical mode")}>

👨‍💻 Technical Mode

</button>




<button onClick={()=>sendMessage("hr mode")}>

🧑‍💼 HR Mode

</button>



</div>


)


}


export default ActionButtons;