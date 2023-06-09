import { useState, useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
    const [newUserName, setNewUserName] = useState("");
    const { setUserName } = useContext(AppContext);
    return <div>
        <input type="text" onChange={(e) => { setNewUserName(e.target.value); }} />
        <button onClick={() => { setUserName(newUserName); }}>Change Username</button>
    </div>;
};