import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todoitems, setTodoitems] = useState([1, 2, 3]);

  //TODO : 추가버튼 클릭시 새로운 todoitem 추가
  return (
    <div className="w-full mx-auto">
      <TodoItem />
    </div>
  );
};

export default TodoList;
