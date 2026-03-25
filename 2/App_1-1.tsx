export default function App() {
    const language = "JavaScript"
    const name = "John";
    const age = 25;
    const isAdmin = true;
    
    // JavaScript 주석
    return (
        <>
        {/* JSX 주석 */}
            <h1>Hello, React</h1>
            {language}
            <p>Name : {name}</p>
            <p>Age next year : {age + 1}</p>
            <p>Admin status : {isAdmin.toString()}</p>
        </>
    );
}