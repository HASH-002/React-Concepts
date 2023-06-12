import { useState } from "react";
export const useToggle = (initialValue = false) => {
    const [state, setstate] = useState(initialValue);
    const toggle = () => {
        setstate((prev) => !prev); // prev or prevState is the previous state used inside setState function
    };
    return [state, toggle];
};
