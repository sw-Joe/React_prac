export default function Button(props: {msg: string; children: React.ReactNode}) {
    const clickHandler = () => { console.debug(props.msg) };

    return (
        <>
            <button onClick={clickHandler}>{props.children}</button>
        </>
    )
}