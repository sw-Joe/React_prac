import { useState } from "react";

export default function App() {
    const [count, setCount] = useState<number>(0);
    // let count = 0;

    const clickHandler = () => {
        setCount(count + 1);
        // count++;
        console.debug(count);
    };

    return (
        <>
            <p>counter : {count}</p>
            <button onClick={clickHandler}>Click</button>
        </>
    )
}