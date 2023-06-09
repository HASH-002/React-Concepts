import { useState } from "react";
export const ChangeProfile = (props) => {
    const [newUserName, setNewUserName] = useState("");
    return <div>
        <input type="text" onChange={(e) => { setNewUserName(e.target.value); }} />
        <button onClick={() => { props.setUserName(newUserName); }}>Change Username</button>
    </div>;
};