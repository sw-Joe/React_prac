import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import B from "./B";

export default React.memo(function A({increment} : {increment: () => void}) {
    console.debug("A render")

    return (
        <>
            <ErrorBoundary fallback={<h1>Error occured.</h1>}>
                <Suspense fallback={<h1>A Component</h1>}>
                    <button onClick={increment}>증가</button>
                    <B />
                </Suspense>
            </ErrorBoundary>
        </>
    );
});