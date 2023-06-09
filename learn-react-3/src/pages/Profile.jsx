import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
    return (
        <div>
            PROFILE username is : {props.userName}
            <ChangeProfile setUserName={props.setUserName} />
        </div>
    );
};