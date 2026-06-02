import { lazy, useCallback, useState } from "react";
// import A from "./components/A";
const A = lazy(() => import("./components/A"));    // 컴포넌트가 필요할 때 다운로드

export default function App() {
    console.debug("App reader");
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const increment = useCallback(() => {
        setCount((count) => count + 1);
    }, []);    // 생성 후 동일한 참조값 유지

    return (
        <>
            <h1>App Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={() => setIsShow(() => !isShow)}>Toggle</button>
            {isShow && <A increment={increment}/>}
        </>
    );
}