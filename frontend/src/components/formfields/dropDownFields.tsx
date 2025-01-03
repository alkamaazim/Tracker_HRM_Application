import React from "react";

type Props = {
  name: string;
  value: string;
  isLabel: boolean;
  id?: string | undefined;
  required?: boolean | undefined;
  labelText?: string | undefined;
  labelClass?: string | undefined;
  fieldClass?: string | undefined;
  options: { label: string; value: string }[];
  onChange: (param: any) => void;
};

const DropdownField = (props: Props) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      {props.isLabel && props.labelText && (
        <label
          htmlFor={props.id}
          className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${props.labelClass}`}
        >
          {props.labelText}
        </label>
      )}
      <select
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        className={`peer block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 ${props.fieldClass}`}
        required={props.required}
      >
        <option value="" disabled>
          Select
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
