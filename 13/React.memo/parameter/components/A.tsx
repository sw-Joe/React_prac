import React from "react";
import B from "./B";

export default React.memo(function A({count} : {count: number}) {
    console.debug("A render")

    return (
        <>
            <h1>A Component : {count}</h1>
            <B />
        </>
    );
});