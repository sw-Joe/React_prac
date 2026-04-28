import { useState } from "react";

type TodoEditorProps ={
  onCreate: (content: string) => void;
};

export default function TodoEditor({ onCreate }: TodoEditorProps) {
  const [content, setContent] = useState("");

  const onSubmit = () => {
    if (!content.trim()) {
      alert("할 일을 입력하세요");
      return;
    }
    onCreate(content);
    setContent("");
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  }


  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기</h4>

      <div className="editor_wrapper">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}