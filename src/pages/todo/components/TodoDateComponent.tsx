import React from "react";
import * as Util from "../../../util/Util";

const TodoDateComponent: React.FC = (): JSX.Element => {
  const date = new Date();
  const year: string = date.getFullYear().toString();
  const month: string = (date.getMonth() + 1).toString();
  const day: string = date.getDate().toString();
  const dayOfWeek: number = date.getDay();

  const weekLabel = Util.getDateLabel(dayOfWeek);

  const dayFormString: string = year + "년 " + month + "월 " + day + "일 ";

  return (
    <>
      <h1 className="text-5xl mb-3">{dayFormString}</h1>
      <div className="text-xl text-gray-500">{weekLabel}</div>
    </>
  );
};

export default TodoDateComponent;
