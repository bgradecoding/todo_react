import React from "react";

type Props = {
  labelText?: string;
  placeholder?: string;
  autoFuocus?: boolean;
  readonly?: boolean;
  onChange?: Function;
  onClick?: Function;
  onKeyPress?: Function;
  disabled?: boolean;
  maxLength?: number;
  type: string;
  name: string;
};

const Input: React.FC<Props> = ({
  labelText = "",
  placeholder,
  autoFuocus,
  readonly,
  onChange = null,
  onClick = null,
  onKeyPress = null,
  disabled = false,
  maxLength,
  type,
  name,
}): JSX.Element => {
  const cpOnChange = (e: any) => {
    onChange && onChange(e);
  };
  const cpOnClick = (e: any) => {
    onClick && onClick(e);
  };
  const cpOnKeyPress = (e: any) => {
    onKeyPress && onKeyPress(e);
  };
  return (
    <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500 border-solid border-gray-300">
      <input
        readOnly={readonly}
        autoFocus={autoFuocus}
        type={type}
        name={name}
        maxLength={maxLength}
        disabled={disabled}
        placeholder={placeholder}
        className="block p-2 w-full text-lg focus:outline-none bg-transparent"
        onChange={cpOnChange}
        onClick={cpOnClick}
        onKeyPress={cpOnKeyPress}
      />
      <label className="absolute ml-5 top-0 text-lg text-gray-700 bg-white mt-2 -z-1 duration-300 origin-0">
        {labelText}
      </label>
    </div>
  );
};

export default Input;
