type TodoItemProps = {
  id: string;
  isDone: boolean;
  content: string;
  createDate: number;
  onUpdate: (targetId: string) => void;
  onDelete: (targetId: string) => void;
}

export default function TodoItem({id, isDone, content, createDate, onUpdate, onDelete}: TodoItemProps) {
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={() => onUpdate(id)}/>
      </div>

      <div className={`title_col ${isDone ? "done" : ""}`}>{content}</div>

      <div className="date_col">{new Date().toLocaleDateString()}</div>

      <div className="btn_col">
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  )
}