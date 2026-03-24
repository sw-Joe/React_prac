import "./App.css";
// import Values from "./components/Values"
// import Child from "./components/Child"
import User from "./components/User";

export default function App() {
	// const userObj = {
	// 	name: "Joe",
	// 	age: 20,
	// }
	// const clickHandler = () => {
	// 	alert("BTN CLICKED");
	// }

	return (
		<>
			{/* <Values/>  component 사용 */}

			{/* <Child userObj={{name: "Mike", age: 20}} 
				clickHandler={() => alert("CLICKED")}/> */}
			
			{/* ... : 전개 연산자 - 객체 속성을 각각 전달하고 싶을 때 */}
			{/* <User {...userObj} clickHandler={clickHandler} /> */}
			
			<User>
				<p>James</p>
				<p>20</p>
				<p>male</p>
			</User>
		</>
	)
}