import UserProfile from "./components/UserProfile";

export default function App() {
    return (
        <>
            <h1>사용자 목록</h1>
            <UserProfile name="Alice" age={30} isAdmin={true} />
            <UserProfile name="James" age={25} isAdmin={false} />
        </>
    )
}


// export default function App() {
//     const userAliceObj = {
//         name: "Alice",
//         age: 30,
//         isAdmin: true,
//     }
//     const userJamesObj = {
//         name: "James",
//         age: 25,
//         isAdmin: false,
//     }
//     return (
//         <>
//             <h1>사용자 목록</h1>
//             <UserProfile {...userAliceObj} />
//             <br />
//             <UserProfile {...userJamesObj} />
//         </>
//     )
// }