import { Link, Outlet } from 'react-router-dom';
import Logo from "../assets/svgs/logo.svg"
export default function AuthLayout(){
    return (
        <div className="layout-container">
            <div className="w-full min-h-screen flex flex-col justify-center items-center">
                <Link to={'/'}><img src={Logo} className="mb-12" alt="Atlys Logo" /></Link>
                <div className='w-full max-w-[463px]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
