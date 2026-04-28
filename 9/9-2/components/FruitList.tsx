import { useState } from "react";

export default function FruitList() {
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  const handleFruitAdd = () => {
    setItems((items) => [...items, '포도']);
  }

  const isGrapeAdded = items.includes('포도');

  return (
    <>
      <h1>FruitList</h1>
      <ul>
        {items.map((item, idx) => (<li key={idx}>{item}</li>))}
      </ul>
      <button onClick={handleFruitAdd} disabled={isGrapeAdded}> 과일 추가 </button>
    </>
  )
}