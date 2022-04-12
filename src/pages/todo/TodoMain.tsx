import React, { useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import * as actions from "../../data/rootActions";
import * as selector from "../../data/rootSelector";
import { TodoResult } from "type/todo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TodoMain: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const todoList: Array<TodoResult> = useSelector(selector.todo.getTodo);
  const [todoCount, setTodoCount] = React.useState(todoList.length);
  useEffect(() => {
    dispatch(actions.todo.getTodo());
    setTodoCount(todoList.length);
  }, []);
  return (
    <div className="p-9 bg-white max-w-2xl w-full mx-auto rounded-lg shadow-xl overflow-hidden space-y-10 box-border">
      <TodoHeader todoCount={todoCount} />
      <TodoList />
    </div>
  );
};

export default TodoMain;
