import B from "./B";

export default function A() {
    console.debug("A render")

    return (
        <>
            <h1>A Component</h1>
            <B />
        </>
    );
}