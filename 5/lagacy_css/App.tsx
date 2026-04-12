import './App.css';

export default function App() {
    // 인라인 스타일 적용
    const titleStyles = {
                backgroundColor: 'green',
                color: 'white',
                fontSize: '16px',
                padding: '10px'
            };

    return (
        <>
            <h1 style={{
                backgroundColor: 'blue',
                color: 'white',
                fontSize: '16px',
                padding: '10px'
            }}>스타일 속성 객체 할당</h1>
            <br />
            <h1 style={titleStyles}>스타일 속성 변수 할당</h1>
            <br />
            <h1 className='h1-global'>글로벌 스타일</h1>
        </>
    )
}