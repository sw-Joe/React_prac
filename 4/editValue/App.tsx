import { useState } from "react";

interface UserInfo {
    name: string,
    age: number
}

export default function App() {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: "Joe",
        age: 30,
    });
    // let count = 0;

    const clickHandler = () => {
        setUserInfo((userInfo) => ({ ...userInfo, age: 35, }));
        // count++;
        // console.debug(count);
    };

    return (
        <>
            <p>info : {[userInfo.name, userInfo.age].join(", ")}</p>
            <button onClick={clickHandler}>Click</button>
        </>
    )
}