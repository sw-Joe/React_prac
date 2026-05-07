import { useState } from "react";
import type { Todo } from "../App";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todo: Todo[];
  onUpdate: (targetId: string) => void;
  onDelete: (targetId: string) => void;
}

export default function TodoList({ todo, onUpdate, onDelete }: TodoListProps) {
  const [search, setSearch] = useState("");
  const searchedTodo = search ? todo.filter(
    (item) => item.content.toLowerCase().includes(search.toLowerCase())) : todo;

  return (
    <div className="TodoList">
      <h4>TodoList</h4>
      <input className="searchbar" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어를 입력하세요" />

      <div className="list_wrapper">
        {searchedTodo.length > 0 ? (searchedTodo.map((item) => (
          <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete}/>
        ))) : (<p className="empty_message">검색 결과가 없습니다.</p>)}
      </div>
    </div>
  );
}