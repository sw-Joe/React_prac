function ObjectArrayExpressions() {
    const user = {
            name: "Jane",
            email: "jane@example.com"
        };
    const colors = ["red", "blue", "green"];
    const numbers = [1,2,3,4,5];

    return (
        <>
            <p>User: {user.name} ({user.email})</p>
            <p>First color: {colors[0]}</p>
            <p>Color count: {colors.length}</p>
            <p>Doubles: {numbers.map(n => n*2).join(", ")}</p>
            <p>Events: {numbers.filter(n => n%2 === 0).join(", ")}</p>
        </>
    );
}

function FunctionExpressions() {
    return (
        <>
            <p>Good {(() => {
                const hours = new Date().getHours();
                
                return hours < 12 ? "morning!" : "afternoon!";
            })()}</p>
        </>
    );
}

export default function App () {
    return (
        <>
            <h1>Hello React</h1>
            <FunctionExpressions/>
        </>
    );
}