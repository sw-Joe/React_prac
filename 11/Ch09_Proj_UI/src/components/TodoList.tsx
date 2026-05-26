import Button from "./html/Button";
import Input from "./html/Input";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList () {
  return (
    <>
              <ul className="todo__list">
                {/* <!-- 할 일 목록이 없을 때 --> */}
                <TodoListItemEmpty />
                {/* <!-- 할 일 목록이 있을 때 -->
              <!-- 할 일이 완료되면 .todo__item--complete 추가 --> */}
                <TodoListItem/>
                <li className="todo__item todo__item--complete">
                  {/* <!-- <div className="todo__checkbox-group">
                  <input type="checkbox" className="todo__checkbox" defaultChecked />
                  <label>Eat Breakfast</label>
                </div> --> */}
                  {/* <!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) --> */}
                  <Input type="text" className="todo__modify-input" />
                  <div className="todo__button-group">
                    <Button className="todo__action-button">
                      <SvgPencil />
                    </Button>
                    <Button className="todo__action-button">
                      <SvgClose />
                    </Button>
                  </div>
                </li>
              </ul>
    </>
  );
}