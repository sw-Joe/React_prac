import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor({addTodo}: {addTodo: (text: string) => void; }) {
    const [text, setText] = useState("");
    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.debug(text);
        if (!text.trim()) return;
        addTodo(text);    // 부모에게 전달받은 함수 실행
        setText("");    // 상태 저장 후 입력한 값 지우기
    }

    return (
        <>
            <form className="todo__form" onSubmit={handleSubmit}>
                <div className="todo__editor">
                    <Input type="text" className="todo__input" placeholder="Enter Todo List"
                        value={text} onChange={(e) => setText(e.target.value)} />
                    <Button className="todo__button" type="submit">Add</Button>
                </div>
            </form>
        </>
    );
}