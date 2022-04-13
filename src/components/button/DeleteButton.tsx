import React from "react";
import { MdDelete } from "react-icons/md";

type Props = {
  onClick: Function;
};
const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <MdDelete
      onClick={() => onClick()}
      className="ml-4 text-gray-500 hover:text-opacity-30 cursor-pointer"
    />
  );
};

export default DeleteButton;
