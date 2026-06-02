import C from "./C";

export default function B() {
    console.debug("B render")

    return (
        <>
            <h1>C Component</h1>
            <C />
        </>
    );
}