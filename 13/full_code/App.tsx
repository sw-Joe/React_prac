import { lazy, Suspense, useCallback, useDeferredValue, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import A from "./components/A";
// const A = lazy(() => import("./components/A"));    // 컴포넌트가 필요할 때 다운로드
const A = lazy(() => new Promise<typeof import("./components/A")>((resolve) => {
    setTimeout(() => {
        resolve(import("./components/A"));
    }, 3000);
}));    

function Fallback({error, restartErrorBoundary}: {error: Error, restartErrorBoundary: () => void}) {
    return (
        <div role="alert">
            <p>Something went wrong: </p>
            <pre style={{color: "red"}}>{error.message}</pre>
            <button onClick={restartErrorBoundary}>retry</button>
        </div>
    );
}


export default function App() {
    console.debug("App reader");
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const [query, setQuery] = useState("");
    const defferedValue = useDeferredValue(query);

    const increment = useCallback(() => {
        setCount((count) => count + 1);
    }, []);    // 생성 후 동일한 참조값 유지

    return (
        <>
            <ErrorBoundary FallbackComponent={Fallback}>
                <Suspense fallback={<h1>A Component</h1>}>
                    <h1>App Count: {count}</h1>
                    <button onClick={increment}>+</button>
                    <button onClick={() => setIsShow(() => !isShow)}>Toggle</button>
                    {isShow && <Suspense fallback={<h1>'A' Loading...</h1>}><A increment={increment}/></Suspense>}
                </Suspense>
            </ErrorBoundary>
            <div>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <SlowList query={defferedValue} />
            </div>
        </>
    );
}