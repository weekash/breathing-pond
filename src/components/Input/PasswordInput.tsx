import React, { useState } from 'react';
import EyeSvg from "../../assets/svgs/eye.svg"
interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-gray-100 text-sm font-medium mb-2.5">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className="w-full bg-gray-800 p-3 border-1.5 border-gray-500 rounded text-white focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img src={EyeSvg} />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
