import React, { useState } from "react";
import TodoDateComponent from "./components/TodoDateComponent";
import TodoCountComponent from "./components/TodoCountComponent";

const TodoHeader: React.FC = () => {
  const [todoCount, setTodoCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <TodoDateComponent />
      </div>
      <div className="w-full mx-auto">
        <TodoCountComponent todoCount={todoCount} />
      </div>
    </>
  );
};

export default TodoHeader;
