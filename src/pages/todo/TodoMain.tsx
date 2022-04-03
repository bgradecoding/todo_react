import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const TodoMain: React.FC = (): JSX.Element => {
  return (
    <div className="p-9 bg-white max-w-2xl w-full mx-auto rounded-lg shadow-xl overflow-hidden space-y-10 box-border">
      <TodoHeader />
      <TodoList />
    </div>
  );
};

export default TodoMain;
