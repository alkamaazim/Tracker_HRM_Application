import React from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  isLabel: boolean;
  id?: string | undefined;
  required?: string | undefined;
  labelText?: string | undefined;
  labelClass?: string | undefined;
  fieldClass?: string | undefined;
  onChange: (param: any) => void;
};

const Inputfield = (props: Props) => {
  return (
    <>
      {props.isLabel && (
        <label
          htmlFor="password"
          className={`${props.labelClass} block text-sm font-medium text-gray-700 mb-1`}
        >
          {props.labelText}
        </label>
      )}
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        className={`${props.fieldClass} w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500`}
        required
      />
    </>
  );
};

export default Inputfield;
