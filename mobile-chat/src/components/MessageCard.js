import { useState } from 'react';
import { auth } from "../config";

const MessageCard = ({ message, handleDelete }) => {
    const { displayName } = auth.currentUser;
    const { id, text, uid, createdAt, photoURL } = message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    const [showActionButtons, setShowActionButtons] = useState(false);
    const toggleCard = () => {
        setShowActionButtons(!showActionButtons);
    };
return (
    <>
        <div className={`message ${messageClass}`}>
            <div className="contents" onClick={toggleCard}>
                <div className="user-name">
                    <p> Kevin Johnson </p>
                </div>
                <div className="photo">
                    <img
                        src={photoURL} alt="avatar" />
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
                <div
                    style={{ display: showActionButtons ? "block" : "none" }}
                    className="actions"
                >
                <button onClick={() => handleDelete(createdAt, id)}>Delete</button>
                </div> 
            </div>
        </div>
    </>
  );
};

export default MessageCard
