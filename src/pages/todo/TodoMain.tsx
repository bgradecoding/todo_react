import React from "react";
import TodoHeader from "./TodoHeader";

const TodoMain: React.FC = (): JSX.Element => {
  return (
    <div className="mt-2 items-center z-10">
      <div>todomain</div>
      <TodoHeader />
    </div>
  );
};

export default TodoMain;
