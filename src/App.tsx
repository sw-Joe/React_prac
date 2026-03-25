import Button from "./components/Button";

export default function App() {
    return (
        <>
            <Button name={'Home'}/>
            <Button name={'Store'}/>
            <Button name={'Contact'}/>
            <input 
                onFocus={() => console.log('Focus')}
                onBlur={() => console.log('Blur')}
                onChange={(e) => console.log(e.target.value)}
            />
        </>
    );
}