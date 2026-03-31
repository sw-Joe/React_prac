export default function CountButton({ handleIncrement, handleDecrement, handleReset }: 
    {
        handleIncrement: () => void;
        handleDecrement: () => void;
        handleReset: () => void;
    }) {
    return (
        <>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handleDecrement}> - </button>
            <button onClick={handleReset}> Reset </button>
        </>
    )
}