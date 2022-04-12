import React from "react";

type Props = {
  onClick: Function;
  checked: boolean;
};

const Checkbox: React.FC<Props> = ({ onClick, checked }): JSX.Element => {
  return (
    <>
      <div>
        <svg
          className="w-7 h-7 dark:text-white text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Checkbox;
