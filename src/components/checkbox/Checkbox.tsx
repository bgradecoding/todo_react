import React from "react";

type Props = {
  onClick: Function;
};

const Checkbox: React.FC<Props> = ({ onClick }): JSX.Element => {
  return (
    <>
      <input type="checkbox" id="checkbox" />
    </>
  );
};

export default Checkbox;
