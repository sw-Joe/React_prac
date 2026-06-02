import { useState } from "react";
import A from "./components/A";

export default function App() {
    console.debug("App reader");
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>App Count: {count}</h1>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <A count={count}/>
        </>
    );
}