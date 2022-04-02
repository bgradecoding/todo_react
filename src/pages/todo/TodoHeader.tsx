import React from "react";

const TodoHeader: React.FC = () => {
  const today = new Date("YYYY-MM-DD");
  return (
    <div>
      <h1>{today}</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </div>
  );
};

export default TodoHeader;
