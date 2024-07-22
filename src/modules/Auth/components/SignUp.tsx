import { useState } from 'react';
import Input from '../../../components/Input/Input';
import PasswordInput from '../../../components/Input/PasswordInput';
import Button from '../../../components/Button/Button';
import { useAuth } from '../../../hooks/useAuth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { authModal, showLoginModal } = useAuth()
  return (
    <div className="w-full mx-auto bg-gray-800 p-6 rounded-lg form-gradient-border">
      <p className='font-medium text-sm text-center mb-2 text-gray-400'>SIGN UP</p>
      <h2 className="text-lg font-semibold text-center text-white mb-11">Create an account to continue</h2>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Username"
        placeholder="Choose a preferred username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <PasswordInput
        label="Password"
        placeholder="Choose a strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit' customClass='w-full mt-1'>Continue</Button>
      <p className="text-gray-300 font-medium mt-3 text-sm">
        Already have an account?  {authModal == 'none' ? <a href="/login" className="text-gray-100 hover:underline">Login →</a> : <span onClick={showLoginModal} className="text-gray-100 hover:underline">Login →</span>}
      </p>
    </div>
  );
};
