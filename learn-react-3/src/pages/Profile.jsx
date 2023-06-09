import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = () => {
    const { userName, setUserName } = useContext(AppContext);
    return (
        <div>
            PROFILE username is : {userName}
            <ChangeProfile setUserName={setUserName} />
        </div>
    );
};