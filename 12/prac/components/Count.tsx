import { useEffect, useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.debug("[MOUNT] Count component generated.")
        return () => console.debug("[UNMOUNT] Count component destroyed")
    }, [])
    useEffect(() => {
        console.debug("[UPDATE] Count changed: " + count);
    }, [count])     // 의존성 배열만 다르면 여러 개의 useEffect 작성이 가능
    
    return (
        <>
            <h1>Count :{count}</h1>
            <button onClick={() => setCount(
                (count) => count + 1
            )}>증가</button>
        </>
    );
}