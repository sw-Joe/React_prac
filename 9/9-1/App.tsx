import { useState } from "react";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <h1>{isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}</h1>
      <button onClick={() => setLoggedIn((isLoggedIn: boolean) => !isLoggedIn)}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </>
  )
}