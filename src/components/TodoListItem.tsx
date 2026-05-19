import { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

/* 할 일 목록이 있을 때 */
export default function TodoListItem({todo, toggleTodo, deleteTodo, modifyTodo}: {
    todo:Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    modifyTodo: (id: number, text: string) => void;
}) {
    const [isModify, setIsModify] = useState(false);    // 수정 모드 여부를 판단하는 상태
    const [modifyText, SetModifyText] = useState("");    // 수정할 내용을 담는 상태

    const modifyHandler = () => {
        setIsModify((isModify) => !isModify);
        SetModifyText(modifyText => modifyText == "" ? todo.text : modifyText);
        if (modifyText !== todo.text) {
            modifyTodo(todo.id, modifyText);
        }
    }

    return (
        <>
            {/* <!-- 할 일이 완료되면 .todo__item--complete 추가 --> */}
            <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
                {!isModify && (
                    <Checkbox 
                    parentClassName="todo__checkbox-group" 
                    type="checkbox" 
                    className="todo__checkbox-group"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    >{todo.text}</Checkbox>
                )}

                {/* <!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) --> */}
                {isModify && (<input type="text" className="todo__modify-input"
                    value={modifyText} onChange={(e) => SetModifyText(e.target.value)}/>)}
                <div className="todo__button-group">
                    <Button className="todo__action-button" onClick={modifyHandler}>
                        <SvgPencil />
                    </Button>
                    <Button className="todo__action-button" onClick={() => deleteTodo(todo.id)}>
                        <SvgClose />
                    </Button>
                </div>
            </li>
        </>
    );
}