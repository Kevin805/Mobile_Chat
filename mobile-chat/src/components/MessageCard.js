import { useState } from 'react';
import { auth } from "../config";

const MessageCard = ({ message, handleDelete }) => {
    const { id, text, uid, createdAt, photoURL } = message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    const [showActionButtons, setShowActionButtons] = useState(false);
    const toggleCard = () => {
        setShowActionButtons(!showActionButtons);
    };

}