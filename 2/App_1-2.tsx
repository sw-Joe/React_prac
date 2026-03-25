// 컴포넌트 선언
function BasicExpressions () {
  const name = "John"; //변수 선언
  const age = 26;
  const isAdmin = true;
  
  return (
    <>
    <p>Name: {name}</p>                        {/* 변수 출력*/}
    <p>Age next year : {age + 1}</p>           {/* 계산식*/}
    <p>{name + "'s Profile"}</p>               {/* 문자열 결합*/}
    <p>Admin status: {isAdmin.toString()}</p>  {/* 불리언 출력*/}
    </>
  );
}

export default function App() {
  return (
    <>
      <h1>Hello, React</h1>
      <BasicExpressions/>  {/* 컴포넌트 */}
    </>
  );
}