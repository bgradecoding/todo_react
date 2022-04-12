import React from "react";
import Checkbox from "../../components/checkbox/Checkbox";

type Props = {
  todoId: number;
  todoName: string;
  todoStatus: string;
};

const TodoItem: React.FC<Props> = ({ todoId }): JSX.Element => {
  return (
    <div className="flex items-center mb-5">
      <Checkbox onClick={() => {}} checked={true} />{" "}
      <div className="ml-4">{todoId} 물 마시기</div>
    </div>
  );
};

export default TodoItem;
