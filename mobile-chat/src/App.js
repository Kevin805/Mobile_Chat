import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { auth } from "./config";
import './App.css';

function App() {
  const [currentRoom, setCurrentRoom] = useState("General");
  const [user] = useAuthState(auth);

 
