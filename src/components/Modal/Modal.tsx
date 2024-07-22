import { ReactNode } from 'react';
import CrossIcon from "../../assets/svgs/cross.svg"
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 grid place-items-center">
            <div className="fixed inset-0 bg-opacity-50 bg-black-700 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative p-4 z-10 slide-up w-full max-w-lg">
                {children}
                <button onClick={onClose} className="absolute top-8 right-8 h-8 w-8 bg-black-700 rounded-full ">
                    <img className='mx-auto' src={CrossIcon} alt="close button" />
                </button>
            </div>
        </div>)
};
