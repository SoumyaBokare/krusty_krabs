import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import './style/App.css';

function App() {
  const [chats, setChats] = useState([
    { id: '1', title: 'Chat 1' },
  ]);
  const [currentChat, setCurrentChat] = useState('1');

  const handleNewChat = () => {
    const newChat = { id: uuidv4(), title: `Chat ${chats.length + 1}` };
    setChats([...chats, newChat]);
    setCurrentChat(newChat.id);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/chatroom"
          element={
            <div className="app-container">
              <Sidebar
                chats={chats}
                onSelectChat={setCurrentChat}
                onNewChat={handleNewChat}
              />
              <Chat key={currentChat} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;