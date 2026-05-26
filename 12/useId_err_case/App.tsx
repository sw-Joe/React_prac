import Checkbox from "./components/Checkbox";

export default function App() {
    return (
        <>
            <Checkbox />
            {/* 두번째 컴포넌트: 동작하지 않음 */}
            <Checkbox /> 
        </>
    );
}