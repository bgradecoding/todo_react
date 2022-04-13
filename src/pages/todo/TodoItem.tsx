import React, { useCallback } from "react";
import Checkbox from "../../components/checkbox/Checkbox";
import { useDispatch } from "react-redux";
import * as actions from "../../data/rootActions";
import { MdDelete } from "react-icons/md";
import AlertModal from "../modal/AlertModal";
import DeleteButton from "../../components/button/DeleteButton";

type Props = {
  todoId: number;
  todoName: string;
  todoStatus: string;
};

const TodoItem: React.FC<Props> = ({
  todoId,
  todoName,
  todoStatus,
}): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const onDelete = useCallback(() => {
    dispatch(actions.todo.deleteTodo(todoId));
    setIsModalOpen(false);
  }, [todoId, dispatch]);
  return (
    <div className="flex items-center mb-5">
      <Checkbox
        onClick={() => {
          dispatch(
            actions.todo.updateTodo(
              todoId,
              todoStatus === "done" ? "doing" : "done"
            )
          );
        }}
        checked={todoStatus === "done" ? true : false}
      />{" "}
      <div
        className={`ml-4 ${
          todoStatus === "done"
            ? "text-purple-500 line-through"
            : "text-gray-400"
        }`}
      >
        {todoName}
      </div>
      <div>
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};
export default TodoItem;
