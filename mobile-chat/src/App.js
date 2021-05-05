import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./config";
import './App.css';
import Login from ".components/Login";
import ChatRoom from ".components/ChatRoom";

function App() {

  const user = useAuthState(auth);

  return (
    <div className="App">
      <div>
        {user ? <ChatRoom /> : <Login />}</div>
    </div>
  );
}

export default App;
