import { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [chat, setChat] = useState([]);
  const [score] = useState(0);

  async function sendMessage(message) {
    try {
      const res = await fetch(
        "https://talentiq-ai-recruitment-platform.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();

      setChat((prev) => [
        ...prev,
        {
          user: message,
          ai: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setChat((prev) => [
        ...prev,
        {
          user: message,
          ai: "Unable to connect to the AI server.",
        },
      ]);
    }
  }

  return (
    <Dashboard
      chat={chat}
      sendMessage={sendMessage}
      score={score}
    />
  );
}

export default App;