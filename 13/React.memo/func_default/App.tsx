import { useState } from "react";
import A from "./components/A";

export default function App() {
    console.debug("App reader");
    const [count, setCount] = useState(0);

    const increment = () => setCount((count) => count + 1);

    return (
        <>
            <h1>App Count: {count}</h1>
            <button onClick={increment}>+</button>
            <A increment={increment}/>
        </>
    );
}