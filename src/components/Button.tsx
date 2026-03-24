type Props = { name: string; }

export default function Button({name}: Props) {
    const handleEvent = (which: string) => {
        console.log(name, which);
    }
    return (
        <>
            <button
                onMouseEnter={}
                onMouseLeave={}
                onD
            ></button>
        </>
    )
}



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