// export default function Button(props: {name: string}) {
//     const HandleEvent = () => {
//         console.log(props.name);
//     };
//     return (
//         <>
//             <button onClick={HandleEvent}> {props.name} </button>
//         </>
//     )
// }



// export default function Button({name}: Props) {
//     const handleEvent = (which: string) => {
//         console.log(name, which);
//     }
//     return (
//         <>
//             <button
//                 onMouseEnter={() => handleEvent("MouseEnter")}
//                 onMouseLeave={() => handleEvent("MouseLeave")}
//                 onDoubleClick={() => handleEvent("DoubleClick")}
//                 onContextMenu={() => handleEvent("onContextMenu")}  // 우클릭 시 발생
//             >{name}</button>
//         </>
//     )
// }


type Props = { name: string; }

export default function Button({name}: Props) {
    const clickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("name:", name, e.clientX, e.clientY);
        console.log("event:", e);
        console.log("Shift 눌림:", e.shiftKey);
    };

    const handleEvent = (which: string) => {
        console.log(name, which);
    };

    return (
        <>
            <button
                onClick={(e) => clickEvent(e)}
                onMouseEnter={() => handleEvent("MouseEnter")}
                onMouseLeave={() => handleEvent("MouseLeave")}
                onDoubleClick={() => handleEvent("DoubleClick")}
                onContextMenu={() => handleEvent("onContextMenu")}
            >{name}</button>
        </>
    );
}