import React, { useCallback } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import * as actions from "../../data/rootActions";

type Props = {
  open: boolean;
  close: Function;
  header: string;
};

const TodoInputModal: React.FC<Props> = ({ open, header, close }) => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const addTodo = useCallback(() => {
    dispatch(actions.todo.addTodo(input));
    setInput("");
    close();
  }, [input, close, dispatch]);
  //ref로 input 연결
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={() => close(false)}>
              &times;
            </button>
          </header>
          <main>
            <input
              type="text"
              className=" w-full"
              placeholder="할일을 입력해 주세요."
              onChange={(e) => setInput(e.target.value)}
            />
          </main>
          <footer>
            <button className="close" onClick={() => addTodo()}>
              입력
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default TodoInputModal;
