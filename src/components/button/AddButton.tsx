import React from "react";
import { CgMathPlus } from "react-icons/cg";

type Props = {
  onClick: Function;
};

export const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={() => onClick(true)}
        className=" absolute bottom-20 right-1/3 border-none rounded-full h-30 w-30 z-10 bg-purple-700"
      >
        <CgMathPlus className=" text-white w-24 h-24" />
      </button>
    </div>
  );
};
