import React, { useState } from "react";
import TodoDateComponent from "./components/TodoDateComponent";
import TodoCountComponent from "./components/TodoCountComponent";

type Props = {
  todoCount: number;
};

const TodoHeader: React.FC<Props> = ({ todoCount }) => {
  const [todocount, setTodoCount] = useState(todoCount);

  return (
    <>
      <div className="w-full">
        <TodoDateComponent />
      </div>
      <div className="w-full mx-auto">
        <TodoCountComponent todoCount={todocount} />
      </div>
    </>
  );
};

export default TodoHeader;
