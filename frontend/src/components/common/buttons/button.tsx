import React from "react";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  btnClass?: string | undefined;
  btnText: string;
};

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      className={`${props.btnClass} w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
