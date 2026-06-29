import { useState } from "react";

function ChatBox({ chat, sendMessage }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    sendMessage(message);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbox">

      <h2>🗨️ AI Recruiter Assistant</h2>

      <div className="chat-history">

        {chat.map((item, index) => (
          <div key={index} className="chat-message">

            <p>
              <strong>You:</strong> {item.user}
            </p>

            <p>
              <strong>AI:</strong> {item.ai}
            </p>

          </div>
        ))}

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Type your answer or message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button onClick={handleSend}>
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;