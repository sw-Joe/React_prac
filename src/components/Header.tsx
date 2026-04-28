export default function Header() {
  return (
    <div className="Header">
      <h3>today</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}