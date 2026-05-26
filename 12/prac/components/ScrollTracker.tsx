import { useEffect } from "react";

export default function ScrollTracker() {
    useEffect(() => {
        const handleScroll = () => {
            console.debug("current scroll position: ", window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{height: '200vh'}}>plz scroll.</div>
    );
}