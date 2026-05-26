import { useEffect, useState } from "react";

export default function Timer() {
    const [sec, setSec] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSec((prev) => prev + 1);
        }, 1000);

        return clearInterval(interval);
    }, [])
    
    return (
        <>
            <p>Timer: {sec} 초</p>
        </>
    );
}