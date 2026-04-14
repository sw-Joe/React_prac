import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

const performCalculation = (prev:number, current:number, operator:string) => {
  switch(operator) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "/":
      return prev / current;
    default:
      return current;
  }
}

export default function Calculator() {
  const [calcState, setCalcState] = useState<CalcState> ({
    currentNum: "0",
    prevNum: "",
    operator: null,
    isNewNum: true
  })

  const handleClear = () => {
    setCalcState({
        currentNum: "0",
        prevNum: "",
        operator: null,
        isNewNum: true,
    })
  }
  const handleOperator = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.debug(e.currentTarget.value);
    const operator = e.currentTarget.value;
    setCalcState((calcState) => {

      // Exception: 연산자 연속 입력
      if (calcState.currentNum === "" && operator) return calcState;

      const current = parseFloat(calcState.currentNum);

      if (calcState.prevNum && calcState.operator) {
        const prev = parseFloat(calcState.prevNum);
        const result = performCalculation(prev, current, calcState.operator)

        return operator === "=" ? {
          currentNum: result.toString(),
          prevNum: "",
          operator: null,
          isNewNum: true,
        } : {
          currentNum: "",
          prevNum: result.toString(),
          operator: operator,
          isNewNum: true,
        }
      } else if (operator === "=") return { ...calcState, isNewNum: true };
      else {
        return {
          currentNum: "",
          prevNum: current.toString(),
          operator: operator,
          isNewNum: true,
        }
      }
    });
  };
  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.debug(e.currentTarget.value);
    const value = e.currentTarget.value;
    setCalcState((calcState) => ({
      ...calcState,
      currentNum: calcState.isNewNum? value : calcState.currentNum + value,
      isNewNum: false,
    }));
  }
  const handleDot = () => {
    setCalcState((calcState) => {
      if (calcState.currentNum.includes(".")) return calcState;
      return {
        ...calcState,
        currentNum: calcState.currentNum + ".",
        isNewNum: false,
      };
    });
  };

  const btnCfgs : btnCfgs[] = [
    {value: "C", className: "calc-clear", onClick: handleClear},
    {value: "/", className: "calc-operator", onClick: handleOperator},
    {value: "1", className: "calc-num", onClick: handleNum},
    {value: "2", className: "calc-num", onClick: handleNum},
    {value: "3", className: "calc-num", onClick: handleNum},
    {value: "*", className: "calc-operator", onClick: handleOperator},
    {value: "4", className: "calc-num", onClick: handleNum},
    {value: "5", className: "calc-num", onClick: handleNum},
    {value: "6", className: "calc-num", onClick: handleNum},
    {value: "+", className: "calc-operator", onClick: handleOperator},
    {value: "7", className: "calc-num", onClick: handleNum},
    {value: "8", className: "calc-num", onClick: handleNum},
    {value: "9", className: "calc-num", onClick: handleNum},
    {value: "-", className: "calc-operator", onClick: handleOperator},
    {value: ".", className: "calc-dot", onClick: handleDot},
    {value: "0", className: "calc-num", onClick: handleNum},
    {value: "=", className: "calc-result", onClick: handleOperator},
  ];

  return (
    <>
      <div className="bg-[#1f1f1f] flex items-center justify-center h-screen">
        <article className="w-[282px] border border-[#333] bg-[#ccc] p-1">
          <form className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-1" name="forms">
            <input type="text" className="calc-input" name="output" readOnly value={calcState.currentNum}/>
            {btnCfgs.map((btn) => (
              <CalculatorButton key={btn.value} {...btn} />
            ))}
          </form>
        </article>
      </div>
    </>
  );
}