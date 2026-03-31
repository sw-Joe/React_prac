import { useState } from "react";

export default function App() {
    const [count, setCount] = useState<number>(0);

    const increase = () => setCount((count) => count + 1);
    const decrease = () => setCount((count) => count - 1);
    const reset = () => setCount(0);


    return (
        <>
            <p>counter : {count}</p>
            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
            <button onClick={reset}> reset </button>
        </>
    )
}