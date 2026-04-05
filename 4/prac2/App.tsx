import { useReducer } from "react";

function reducer(count: number, action: {type: string}) {
    switch (action.type) {
        case "INCREASE":
            return count + 1;
        case "DECREASE":
            return count - 1;
        case "RESET":
            return 0;
        default:
            return count;
    }
}

export default function App() {
    const [count, countDispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>counter : {count}</h1>
            <button onClick={() => countDispatch({type: "INCREASE"})}> + </button>
            <button onClick={() => countDispatch({type: "DECREASE"})}> - </button>
            <button onClick={() => countDispatch({type: "RESET"})}> reset </button>
        </>
    )
}