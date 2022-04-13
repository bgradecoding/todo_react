import React from "react";

type Props = {
  open: boolean;
  header: string;
  message: string;
  onClose: Function;
  onConfirm: Function;
};

const AlertModal: React.FC<Props> = ({
  open,
  header,
  message,
  onClose,
  onConfirm,
}) => {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>{header}</header>
          <main>{message}</main>
          <footer>
            <button className="close" onClick={onClose(false)}>
              입력
            </button>
            <button className="close ml-3" onClick={() => onConfirm()}>
              취소
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default AlertModal;
