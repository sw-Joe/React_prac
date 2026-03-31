import Button from "./components/Button";

export default function App() {
    return (
        <>
            <Button msg="CLICKED!"> click here </Button>
        </>
    )
}



// const clickHandler = () => {
//     const msg = "button clicked.";
//     console.debug(`[debug] ${msg}`)
//     alert(msg)
// };

// const clickHandlerWithMsg = (msg: string) => {
//     console.debug(msg);
// };

// export default function App() {
//     return (
//         <>
//             {/* <button onClick={clickHandler}>click</button> */}

//             {/* 매개변수가 존재하는 경우는 지양 */}
//             {/* <button onClick={clickHandlerWithMsg('Hello')}>Hello</button> */}
//             <button onClick={() => clickHandlerWithMsg('Hello')}>Hello</button>
//         </>
//     )
// }