import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";

export default function Login() {
  const [email, setEmail] = useState(localStorage.getItem("savedEmail") || "");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe") === "true" || false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? "" : "이메일이 유효하지 않습니다.");
  }
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value) ? "" : "비밀번호가 유효하지 않습니다.");
  }
  const handleMeChange = () => {
    setRememberMe((rememberMe) => !rememberMe);
  }
  const toggleShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 최종 유효성 검사
    if (!validateEmail(email)) return;
    if (!validatePassword(password)) return;

    if (rememberMe) {
      localStorage.setItem("savedEmail", email);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("rememberMe");
    }

    console.debug("로그인 성공", {email, password, rememberMe})
    alert("로그인 성공");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[375px] rounded-lg bg-white border border-gray-300 py-10 px-6 text-gray-700">
        <h1 className="text-xl font-bold mb-2.5">로그인</h1>
        <p className="text-sm mb-5">계속하려면 세부 정보를 입력하세요.</p>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <input
              type="email"
              className="input-field"
              placeholder="someone@example.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (<p className="mt-2 text-sm text-rose-500">
              이메일이 유효하지 않습니다.
            </p>)}
          </div>

          {/* Password Input */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input-field"
                placeholder="Enter Password"
                value={password}
                onChange={handlePwChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 w-6 -translate-y-1/2 cursor-pointer"
                onClick={toggleShowPassword}
              >
                {/* 비밀번호가 보일 땐 eyes.svg */}
                <img src={showPassword ? "/eyes.svg" : "/eyes-closed.svg"} alt="Toggle password visibility" />
              </button>
            </div>

            {passwordError && (<p className="mt-2 text-sm text-rose-500">
              비밀번호가 유효하지 않습니다.
            </p>)}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="chk"
              className="w-5 h-5 cursor-pointer appearance-none border border-gray-700 bg-white rounded-[5px] checked:bg-gray-700 checked:bg-[url('/check-icon.svg')] checked:bg-no-repeat checked:bg-center"
              checked={rememberMe}
              onChange={handleMeChange}
            />
            <label
              htmlFor="chk"
              className="text-sm text-gray-700 cursor-pointer"
            >
              아이디 저장
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="h-[44px] text-sm w-full bg-gray-700 text-gray-100 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
