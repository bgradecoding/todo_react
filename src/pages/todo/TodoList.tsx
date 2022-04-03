import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todoitems, setTodoitems] = useState([1, 2, 3]);

  return (
    <div className="w-full mx-auto">
      {todoitems.map((item) => {
        <TodoItem>{item}</TodoItem>;
      })}
    </div>
  );
};

export default TodoList;
