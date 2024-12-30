"use client";
import { useState } from "react";
import { countries } from "./countryList";
import Inputfield from "@/components/formfields/inputfield";
import DropdownField from "@/components/formfields/dropDownFields";
import { CountryDropdownField } from "@/components/formfields/countryDropDownField";
import DefaultCard from "@/components/common/Card/DefaultCard";

const CreateUser = () => {
  const [uan, setUan] = useState("");
  const [gender, setGender] = useState("");
  const [otherId, setOtherId] = useState("");
  const [lastName, setLastName] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [esicNumber, setEsicNumber] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [aadhaarCard, setAadhaarCard] = useState("");
  const [bankUserName, setBankUserName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [panCardNumber, setPanCardNumber] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [userDetails, setUserDetails] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create an object with all the form data
    const userObj = {
      uan,
      gender,
      otherId,
      lastName,
      bankName,
      ifscCode,
      firstName,
      middleName,
      esicNumber,
      employeeId,
      nationality,
      dateOfBirth,
      aadhaarCard,
      bankUserName,
      maritalStatus,
      panCardNumber,
      bankAccountNumber,
    };
    // Add the new user object to the userDetails array
    setUserDetails((prevDetails) => [...prevDetails, userObj]);
  };

  const handleNationalityChange = (value: string) => {
    setNationality(value);
  };

  return (
    <>
      <DefaultCard>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Create New User
        </h2>
        <form className=" m-8 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-6">
          <Inputfield
            type="text"
            name="firstName"
            value={firstName}
            id="firstName"
            isLabel={true}
            labelText="First Name*"
            fieldClass="border-gray-300"
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
          />
          <Inputfield
            type="text"
            name="middleName"
            value={middleName}
            id="middleName"
            isLabel={true}
            labelText="Middle Name"
            fieldClass="border-gray-300"
            onChange={(e) => setMiddleName(e.target.value)}
          />

          <Inputfield
            type="text"
            name="lastName"
            value={lastName}
            id="lastName"
            isLabel={true}
            labelText="Last Name*"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setLastName(e.target.value)}
          />
          

          
          <DropdownField
            name="maritalStatus"
            value={maritalStatus}
            id="maritalStatus"
            isLabel={true}
            labelText="Marital Status"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            options={[
              { label: "None", value: "none" },
              { label: "Married", value: "married" },
              { label: "Unmarried", value: "unmarried" },
            ]}
            onChange={(e) => setMaritalStatus(e.target.value)}
          />
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Gender
            </label>
            <div className="flex items-center space-x-6">
              {/* Male Radio Button */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>

              {/* Female Radio Button */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>
          <Inputfield
            type="text"
            name="panCardNumber"
            value={panCardNumber}
            id="panCardNumber"
            isLabel={true}
            labelText="Pan card Number*"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setPanCardNumber(e.target.value)}
          />
          <Inputfield
            type="text"
            name="employeeId"
            value={employeeId}
            id="employeeId"
            isLabel={true}
            labelText="Employee Id*"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <Inputfield
            type="text"
            name="otherId"
            value={otherId}
            id="otherId"
            isLabel={true}
            labelText="Other Id"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setOtherId(e.target.value)}
          />
          <CountryDropdownField
            name="nationality"
            value={nationality}
            isLabel={true}
            labelText="Nationality"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            options={countries} // Pass the full countries list
            onChange={handleNationalityChange} // Update nationality on change
          />
          {/* <p>Selected Nationality: {nationality}</p> */}
          <Inputfield
            type="text"
            name="dateOfBirth"
            value={dateOfBirth}
            id="dateOfBirth"
            isLabel={true}
            labelText="Date of Birth"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <Inputfield
            type="text"
            name="aadhaarCard"
            value={aadhaarCard}
            id="aadhaarCard"
            isLabel={true}
            labelText="Aadhaar Card*"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setAadhaarCard(e.target.value)}
          />
          <Inputfield
            type="text"
            name="bankUserName"
            value={bankUserName}
            id="bankUserName"
            isLabel={true}
            labelText="User's name in the bank account"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setBankUserName(e.target.value)}
          />
          {/* UAN Input */}
          <Inputfield
            type="text"
            name="uan"
            value={uan}
            id="uan"
            isLabel={true}
            labelText="UAN"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setUan(e.target.value)}
          />
          <Inputfield
            type="text"
            name="bankName"
            value={bankName}
            id="bankName"
            isLabel={true}
            labelText="Bank Name*"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setBankName(e.target.value)}
          />
          <Inputfield
            type="text"
            name="bankAccountNumber"
            value={bankAccountNumber}
            id="bankAccountNumber"
            isLabel={true}
            labelText="Bank Account Number*"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setBankAccountNumber(e.target.value)}
          />
          <Inputfield
            type="text"
            name="ifscCode"
            value={ifscCode}
            id="ifscCode"
            isLabel={true}
            labelText="IFSC Code*"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setIfscCode(e.target.value)}
          />
          <Inputfield
            type="text"
            name="esicNumber"
            value={esicNumber}
            id="esicNumber"
            isLabel={true}
            labelText="ESIC Number"
            labelClass="text-gray-500"
            fieldClass="border-gray-300"
            onChange={(e) => setEsicNumber(e.target.value)}
          />
          </div>
          <br />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </DefaultCard>
    </>
  );
};

export default CreateUser;
