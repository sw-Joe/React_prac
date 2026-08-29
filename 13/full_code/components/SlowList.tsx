import React from "react";

export default React.memo(function SlowList({ query }: { query: string }) {
    const items = [];
    for (let i = 0; i < 500; i++) {
        items.push(<SlowItem key={i} query={query} />);
    }

    return (
        <>
            <ul>{items}</ul>
        </>
    );
})

function SlowItem({ query } : { query : string }) {
    const startTime = performance.now();
    while (performance.now() - startTime < 1) {}
    return <li>query : {query}</li>
}