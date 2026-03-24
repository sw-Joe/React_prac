import Button from "./components/Button";

export default function App() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.debug(event);
        console.log(event)
        console.log(event.constructor.name)
    }
    return (
        <>
            <Button handleClick={handleClick} />
        </>
    )
}