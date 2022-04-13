import React, { useState } from "react";
import TodoDateComponent from "./components/TodoDateComponent";
import TodoCountComponent from "./components/TodoCountComponent";

import * as actions from "../../data/rootActions";
import * as selector from "../../data/rootSelector";
import { TodoResult } from "type/todo";
import { useSelector } from "react-redux";

const TodoHeader: React.FC = () => {
  const todoListArray: Array<TodoResult> = useSelector(selector.todo.getTodo);

  return (
    <>
      <div className="w-full">
        <TodoDateComponent />
      </div>
      <div className="w-full mx-auto">
        <TodoCountComponent
          todoCount={
            todoListArray.filter((todo) => todo.todostatus === "doing").length
          }
        />
      </div>
    </>
  );
};

export default TodoHeader;
