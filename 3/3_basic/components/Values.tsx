const primString = "Hello, World!";
const primNumber = 42;
const primBoolean = false;
const primUndefined = undefined;
const primNull = null;
// 고유함이 보장되는 특정 값 생성시
const primSymbol = Symbol("mySymbol");
const primBigInt = 9007199254740991n;

const refArray = [1, 2, 3, 4];
const refObject = { name: "John", age: 30 };
const refFunction = () => "함수의 리턴 값";
const refDate = new Date();
const refRegExp = /react/i;
const refMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
]);
const refSet = new Set([1, 2, 3, 4]);

export default () => {
    return (
        <>
            <h2>기본 자료형 출력 </h2>
            <div>
                <p> 문자열: {primString} </p>
                <p> 숫자: {primNumber} </p>
                {/* boolean 타입의 경우 문자열로 변환하여 출력 */}
                <p> 논리형: {primBoolean.toString()} </p>
                {/* 그냥 사용 시 출력되지 않음 */}
                {/* <p> 논리형(직접 출력 시): {primBoolean} </p> */}
                <p> undefined: {String(primUndefined)} </p>
                <p> null: {String(primNull)} </p>
                <p> symbol: {String(primSymbol)} </p>
                <p> BigInt: {primBigInt} </p>
                {/* String() vs. toString() */}
                {/* String() : 전역 함수로서 안전하게 변환 */}
                {/* toString() : 객체 프로토타이 메서드로서 정교한 변환 */}
                {/* null, undefined에 호출 시 TypeError */}
            </div>
            <br />
            {/* 객체의 경우 JSON을 문자열화하여 출력 */}
            <h2>참조 자료형 출력</h2>
            <div>
                {/* .join() :  배열의 모든 요소를 seperator로 연결하여 
                하나의 새로운 문자열로 반환*/}
                <p> 배열 : {refArray.join(", ")} </p>
                <p> 객체 : {JSON.stringify(refObject)} </p>
                <p> 함수 : {refFunction.toString()} </p>
                <p> Date 객체 : {refDate.toString()} </p>
                <p> 정규식 : {refRegExp.toString() }</p>
                <p> Map : {JSON.stringify(Array.from(refMap))}</p>
                <p> Set : {JSON.stringify(Array.from(refSet))}</p>
            </div>
        </>
    )
}