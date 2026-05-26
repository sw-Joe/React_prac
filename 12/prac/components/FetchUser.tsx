import { useEffect } from "react";

export default function FetchUser() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => console.debug(data));
    }, []);

    return (
        <div>
            FetchUser
        </div>
    );
}