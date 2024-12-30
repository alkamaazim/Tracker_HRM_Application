type Country = {
    name: string;
    code: string;
  };
  
  type Props = {
    name: string;
    value: string;
    id?: string | undefined;
    isLabel: boolean;
    labelText: string;
    labelClass?: string | undefined;
    fieldClass?: string | undefined;
    options: Country[]; // Accepts an array of objects
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  
  export const CountryDropdownField = ({
    name,
    value,
    id,
    isLabel,
    labelText,
    labelClass,
    fieldClass,
    options,
    onChange,
  }: Props) => {
    return (
      <>
        {isLabel && (
          <label
            htmlFor={id}
            className={`${labelClass} block text-sm font-medium text-gray-700 mb-1`}
          >
            {labelText}
          </label>
        )}
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${fieldClass} w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500`}
        >
          <option value="" disabled>
            Select {labelText}
          </option>
          {options.map((option) => (
            <option key={option.code} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    );
  };
  
  