export default function CalculatorButton({value, className, onClick} : btnCfgs) {
  return (
    <>
      <input type="button" className={className} value={value} onClick={onClick} />
    </>
  )
}