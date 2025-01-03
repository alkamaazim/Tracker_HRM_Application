
import React from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  isLabel: boolean;
  id?: string | undefined;
  required?: boolean | undefined;
  labelText?: string | undefined;
  labelClass?: string | undefined;
  fieldClass?: string | undefined;
  placeholder?: string | undefined; // Optional placeholder
  onChange: (param: any) => void;
};

const Inputfield = (props: Props) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        className={`peer feald ${props.fieldClass}`}
        placeholder=" " // Use a single space for floating label support
        required={props.required}
      />
      {props.isLabel && props.labelText && (
        <label
          htmlFor={props.id}
          className={`lable ${props.labelClass}`}
        >
          {props.labelText}
        </label>
      )}
    </div>
  );
};

export default Inputfield;
