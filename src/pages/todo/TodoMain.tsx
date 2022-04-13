import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { AddButton } from "../../components/button/AddButton";
import TodoInputModal from "../modal/TodoInputModal";
const TodoMain: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-9 bg-white max-w-2xl w-full mx-auto rounded-lg shadow-xl overflow-hidden space-y-10 box-border">
      <TodoHeader />
      <TodoList />
      <AddButton onClick={setShowModal} />
      <TodoInputModal
        open={showModal}
        header={"todo 입력"}
        close={setShowModal}
      />
    </div>
  );
};

export default TodoMain;
