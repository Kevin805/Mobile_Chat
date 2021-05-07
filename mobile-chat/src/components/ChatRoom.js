import { useState } from "react";
import { db, auth, firebaseRef } from "../config";
import { useCollectionData } from "react-firebase-hooks/firestore"

const ChatRoom = ({ currentRoom }) => {
    const [message, setMessage] = useState("");

    const messagesRef = db.collection("messages");

    const [messages] = useCollectionData(query, { idField: "id" });

    const query = messagesRef 
        .where("room", "==", currentRoom)
        .orderBy("createdAt")
        .limit(20);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        const createdAt = firebaseRef.firestore.FieldValue.serverTimestamp();
            await messagesRef.add({
                uid,
                photoURL,
                createdAt,
                text: message,
                room: currentRoom,
            });
            setMessage("");
    }

    return (
        <div className="messages">
            <form onSubmit={handleSubmit}>
             <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
            />
                <button type="submit" disabled={!message}>Send</button>
            </form>
        </div>
    );
};

export default ChatRoom
