interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:'primary'|'secondary';
  customClass?:string;
}

const Button: React.FC<ButtonProps> = ({ children,variant='primary',customClass, ...props }) => {

  const variantClass={
    'primary':'bg-blue-500 hover:bg-blue-600 active:bg-blue-800 text-white',
    'secondary':'bg-grey-100 hover:bg-grey-200 text-black-100'
  }
  return (
    <button
      {...props}
      className={`py-2 px-9 rounded duration-300 active:scale-105 font-medium ${variantClass[variant]} ${customClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
