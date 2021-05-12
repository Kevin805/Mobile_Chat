import { useState } from "react";
import Logout from "./Logout";
import Rooms from "./Rooms";

const NavBar = ({ user, currentRoom, setCurrentRoom }) => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <nav>
            <h1>
                Current room: <strong>{currentRoom}</strong>
            </h1>
            {user ? (
                <>
                 <button
                    className="menu"
                    onClick={() => {
                        setShowSideBar(!showSideBar);   
                    }}
                 >
                    
                    
                 </button>
            )}
        
        </nav>




    )
}