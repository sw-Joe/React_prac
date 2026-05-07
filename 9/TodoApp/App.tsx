import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

export type Todo = {
  id: string;
  isDone: boolean;
  content: string;
  createDate: number;
}

const mockTodo: Todo[] = [
    {
      id: uuidv4(),
      isDone: false,
      content: "React 공부하기",
      createDate: new Date().getTime(),
    },
    {
      id: uuidv4(),
      isDone: false,
      content: "청소하기",
      createDate: new Date().getTime(),
    },
    {
      id: uuidv4(),
      isDone: false,
      content: "영어 공부하기",
      createDate: new Date().getTime(),
    },
  ]

export default function App() {
  const [todo, setTodo] = useState<Todo[]>(mockTodo);

  const onCreate = (content: string) => {
    const newItem: Todo = {
        id: uuidv4(),
        content,
        isDone: false,
        createDate: new Date().getTime(),
      };
    
      setTodo((todo) => [newItem, ...todo]);
  }
  const onUpdate = (targetID: string) => {
    setTodo((todo) => 
      todo.map((item) => 
        item.id === targetID ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };
  const onDelete = (targetId: string) => {
    setTodo((todo) => todo.filter((item) => item.id !== targetId));
  };

  return (
    <>
      <div className='App'>
        <Header/>
        <TodoEditor onCreate={onCreate}/>
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
    </>
  )
}