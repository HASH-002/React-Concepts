import { useContext } from "react";
import { AppContext } from "../App";

export const Home = (props) => {
    const { userName } = useContext(AppContext);
    return (
        <div>
            <h1>Home and username is : {userName}</h1>
        </div>
    );
};
