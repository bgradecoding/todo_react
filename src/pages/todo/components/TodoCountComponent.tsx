import React from "react";
import * as Util from "../../../util/Util";

type Props = {
  todoCount: number;
};

const TodoCountComponent: React.FC<Props> = ({ todoCount }): JSX.Element => {
  return (
    <>
      <div className=" text-2xl text-purple-700">할 일 {todoCount}개 남음</div>
    </>
  );
};

export default TodoCountComponent;
