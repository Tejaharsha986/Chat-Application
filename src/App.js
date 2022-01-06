import { ChatEngine } from 'react-chat-engine';

import LOginForm from './components/LoginForm';
import  ChatFeed from './components/ChatFeed' ;

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LOginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="d6b1f3b4-2c8c-43ad-a56e-56342797a29a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;