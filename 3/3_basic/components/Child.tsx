export default function Child(
    {userObj, clickHandler}: {
        userObj: {name: string; age: number};
        clickHandler: () => void;
    }) {
    return (
        <>
            <div>
                <p>name: {userObj.name}</p>
                <p>age: {userObj.age}</p>
                <button onClick={clickHandler}>click!</button>
            </div>
        </>
    )
}