function ChatBox({chat}){


return(

<div className="chatbox">


{
chat.map((item,index)=>(


<div key={index}>


<p>
<b>You:</b> {item.user}
</p>


<p>
<b>AI Recruiter:</b>
</p>


<pre>
{item.ai}
</pre>


<hr/>


</div>


))

}


</div>

)

}


export default ChatBox;