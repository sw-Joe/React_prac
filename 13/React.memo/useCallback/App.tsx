import { useCallback, useState } from "react";
import A from "./components/A";

export default function App() {
    console.debug("App reader");
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((count) => count + 1);
    }, []);    // 생성 후 동일한 참조값 유지

    return (
        <>
            <h1>App Count: {count}</h1>
            <button onClick={increment}>+</button>
            <A increment={increment}/>
        </>
    );
}