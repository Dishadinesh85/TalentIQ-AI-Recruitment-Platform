import {useState} from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";


function App(){


const [chat,setChat]=useState([]);

const [score,setScore]=useState(0);



async function sendMessage(message){


const res = await fetch(

"http://localhost:5000/chat",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message

})

}

);



const data=await res.json();



setChat(prev=>[

...prev,

{

user:message,

ai:data.reply

}

]);


}




return(

<Dashboard

sendMessage={sendMessage}

chat={chat}

score={score}

/>

)

}


export default App;