import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    /*
        * useEffect hook works when we mount the component and it will be called every 
        single time when there is a State change (here text, setText) . 
        
        * But what if we do not want to call it again and again or call it once only, 
        this provides with the method of array where we can specify to call it when there 
        is a state change ... useEffect(()=>{},[specify in this array])
        
        * A good example to use this is for fetching data from the api where we can mention
        empty array as we want to fetch data once..
        
        * We can return a function so that to do some task while unmounting the component.

        * An example could be that we can stop making request for some ap while we unmount the
        component.

        * useEffect(()=>{
            mounting

            return ()=>{
                unmounting
            }
        },[updating])
    */
    useEffect(() => {
        console.log("COMPONENT MOUNTED");
        return () => {
            console.log("COMPONENT UNMOUNTED");
        };
    }, []);

    return (
        <div>
            <input
                onChange={(event) => {
                    setText(event.target.value); // updating component
                }}
            />
            <h1> {text}</h1>
        </div>
    );
};
