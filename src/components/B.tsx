import C from "./C";

export default function B() {
    const randomNum = Math.floor(Math.random() * 2) + 1;   // 1 ~2
    if (randomNum === 1) {
        throw new Error("random number is 1");
    }

    console.debug("B render")

    return (
        <>
            <h1>B Component</h1>
            <C />
        </>
    );
}