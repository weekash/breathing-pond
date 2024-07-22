interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string | React.ReactNode;
}
const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-100 text-sm font-medium mb-2.5">
                {label}
            </label>
            <input
                {...props}
                className="w-full bg-gray-800 p-3 border-1.5 border-gray-500 rounded text-white focus:outline-none focus:border-blue-500"
            />
        </div>
    )
}


export default Input;


