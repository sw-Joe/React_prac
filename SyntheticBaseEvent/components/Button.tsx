export default function Button({handleClick}: {
    handleClick: (evnet: React.MouseEvent<HTMLButtonElement>) => void;
    }) {
    return (
        <>
            <button onClick={handleClick}>click here</button>
        </>
    )
}