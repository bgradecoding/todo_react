import React from "react";
import Checkbox from "../../components/checkbox/Checkbox";

const TodoItem: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center">
      <Checkbox onClick={() => {}} /> <div className="ml-4">물 마시기</div>
    </div>
  );
};

export default TodoItem;
