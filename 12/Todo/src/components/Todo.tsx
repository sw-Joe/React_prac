import { useCallback, useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function Todo() {
    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    })

    // TEST용 : 랜덤 데이터 배열 생성 & Todo item 2000개 등록
    // 추가된 데이터는 별도로 삭제 필요(LocalStorage > 사이트 데이터 삭제)
    useEffect(() => {
        const testTodos: Todo[] = Array.from(
            { length: 2000 },
            (_, idx) => ({
                id: idx + 1,
                text: `Todo Item #${idx + 1}`,
                completed: false,
            })
        );
        setTodos(testTodos);
    }, []);

    const addTodo = (text: string) => {
        setTodos((todos) => [
            ...todos,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);
    }
    // 전달(상태변경) 함수 - useCallback 처리
    // props로써 함수를 전달하면서 그 함수가 렌더링에 직접적인 영향을 주지 않는 경우
    // 메모이제이션에 유용
    const toggleTodo = useCallback((id: number) => {
        setTodos((todos) => todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }, []);
    const deleteTodo = useCallback((id: number) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);
    const modifyTodo = useCallback((id: number, text: string) => {
        setTodos((todos) => todos.map((todo) =>
            todo.id === id ? {...todo, text} : todo ))
    }, []);

    return (
        <>
            <div className="todo">
                <TodoHeader />
                <TodoEditor addTodo={addTodo} />
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo}/>
            </div>
        </>
    );
}