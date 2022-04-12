import React, { useMemo } from "react";
import TodoItem from "./TodoItem";
import * as selector from "../../data/rootSelector";
import { TodoResult } from "type/todo";
import { useSelector } from "react-redux";

const TodoList: React.FC = () => {
  const todoList: Array<TodoResult> = useSelector(selector.todo.getTodo);
  const todoItems = useMemo(
    () =>
      todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todoId={todo.id}
          todoName={todo.todoname}
          todoStatus={todo.todostatus}
        />
      )),
    [todoList]
  );

  //TODO : 추가버튼 클릭시 새로운 todoitem 추가
  return <div className="w-full mx-auto">{todoItems}</div>;
};

export default TodoList;
