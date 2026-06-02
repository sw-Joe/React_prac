import { useState } from "react";
import A from "./components/A";

export default function App() {
    console.debug("App reader");
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>App Count: {count}</h1>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <A />  {/* A -> b -> C 순서로 계층적으로 연속 호출 */}
            {/* 리렌더링 되는 경우 하위 컴포넌트들도 리렌더링 -> 비효율적일 수 있음 */}
        </>
    );
}