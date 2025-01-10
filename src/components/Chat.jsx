import { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userMessage = { id: Date.now(), role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('https://krusty-krabs.onrender.com/api/chat', { input });
      const botMessage = { id: Date.now() + 1, role: 'bot', content: response.data.message };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with backend:', error);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.role === 'user' ? 'user' : 'bot'}`}
          >
            <span className="message-content">
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          <Send className="icon" />
        </button>
      </form>
    </div>
  );
}

export default Chat;
