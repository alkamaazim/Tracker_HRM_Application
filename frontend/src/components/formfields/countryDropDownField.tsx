// type Country = {
//     name: string;
//     code: string;
//   };
  
//   type Props = {
//     name: string;
//     value: string;
//     id?: string | undefined;
//     isLabel: boolean;
//     labelText: string;
//     labelClass?: string | undefined;
//     fieldClass?: string | undefined;
//     options: Country[]; // Accepts an array of objects
//     onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   };
  
//   export const CountryDropdownField = ({
//     name,
//     value,
//     id,
//     isLabel,
//     labelText,
//     labelClass,
//     fieldClass,
//     options,
//     onChange,
//   }: Props) => {
//     return (
//       <>
//         {isLabel && (
//           <label
//             htmlFor={id}
//             className={`${labelClass} block text-sm font-medium text-gray-700 mb-1`}
//           >
//             {labelText}
//           </label>
//         )}
//         <select
//           id={id}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className={`${fieldClass} w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500`}
//         >
//           <option value="" disabled>
//             Select {labelText}
//           </option>
//           {options.map((option) => (
//             <option key={option.code} value={option.name}>
//               {option.name}
//             </option>
//           ))}
//         </select>
//       </>
//     );
//   };
  
  
import Select from "react-select";

type Country = {
  name: string;
  code: string;
  flag: string;
};

type Props = {
  name: string;
  value: string;
  isLabel: boolean;
  labelText: string;
  labelClass?: string;
  fieldClass?: string;
  options: Country[];
  onChange: (value: string) => void;
};

export const CountryDropdownField = ({
  name,
  value,
  isLabel,
  labelText,
  labelClass,
  fieldClass,
  options,
  onChange,
}: Props) => {
  // Format options for react-select
  const formattedOptions = options.map(option => ({
    value: option.name,
    label: (
      <div className="flex items-center">
        <img src={option.flag} alt={`Flag of ${option.name}`} className="w-6 h-4 mr-2" />
        {option.name}
      </div>
    ),
  }));

  return (
    <div>
      {isLabel && (
        <label htmlFor={name} className={`${labelClass} block text-sm font-medium text-gray-700 mb-1`}>
          {labelText}
        </label>
      )}
      <Select
        name={name}
        value={formattedOptions.find(option => option.value === value)} // Set selected value
        options={formattedOptions}
        onChange={(selectedOption: any) => onChange(selectedOption.value)} // Handle value change
        className={`${fieldClass}`}
      />
    </div>
  );
};
