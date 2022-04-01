import React from "react";

type Props = {
  text: string;
};

const PointText: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <h2 className="text-4xl font-bold text-center text-indigo-600">{text}</h2>
  );
};

export default PointText;
