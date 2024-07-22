import { useState } from 'react';
import Input from '../../../components/Input/Input';
import PasswordInput from '../../../components/Input/PasswordInput';
import Button from '../../../components/Button/Button';
import { useAuth } from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const { authModal, showSignUpModal } = useAuth()
  return (
    <div className="mx-auto w-full bg-gray-800 p-6 rounded-lg form-gradient-border">
      <p className='font-medium text-sm text-center mb-2 text-gray-400'>WELCOME BACK</p>
      <h2 className="text-lg font-semibold text-center text-white mb-11">Log into your account</h2>
      <Input
        label="Email or Username"
        placeholder="Enter your email or username"
        value={emailOrUsername}
        onChange={(e) => setEmailOrUsername(e.target.value)}
      />
      <PasswordInput
        label={<div>Password <span className='text-xs float-end'>Forgot Password?</span></div>}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit' customClass='w-full mt-1'>Login now</Button>
      <p className="text-gray-300 font-medium mt-3 text-sm">
        Not registered yet? {authModal == 'none' ? <Link to="/signup" className="text-gray-100 hover:underline">Register →</Link> : <span onClick={showSignUpModal} className="text-gray-100 hover:underline">Register →</span>}
      </p>
    </div>
  );
};