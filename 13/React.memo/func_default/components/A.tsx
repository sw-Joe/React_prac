import React from "react";
import B from "./B";

export default React.memo(function A({increment} : {increment: () => void}) {
    console.debug("A render")

    return (
        <>
            <h1>A Component</h1>
            <button onClick={increment}>증가</button>
            <B />
        </>
    );
});