import React from 'react';
import '../styles/App.css'; // Reuse your main styles

export default function CommunityChat() {
  return (
    <div className="chat-page">
      <h2 className="chat-title">Community Chat</h2>

      <div className="chat-thread">
        <div className="chat-bubble other">
          <div className="avatar yellow" />
          <div className="bubble-content">
            <strong>Fellow Member #1</strong>
            <p>Hey, has anyone had experience with chest tightness after cardio?</p>
          </div>
        </div>

        <div className="chat-bubble self">
          <div className="avatar pink" />
          <div className="bubble-content">
            <strong>You</strong>
            <p>Yes! I had that too last year — hydration really helped me.</p>
          </div>
        </div>

        <div className="chat-bubble other">
          <div className="avatar green" />
          <div className="bubble-content">
            <strong>Fellow Member #2</strong>
            <p>Don't forget to check with your doc — I found mine was related to iron levels.</p>
          </div>
        </div>
      </div>

      <form className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button type="submit">➤</button>
      </form>
    </div>
  );
}