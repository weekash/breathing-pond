import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LoggedInUser } from "../interfaces/interface";
import Modal from "../components/Modal/Modal";
import Login from "../modules/Auth/components/Login";
import SignUp from "../modules/Auth/components/SignUp";

type ModalState = 'register' | 'login' | 'none';
interface AuthContextInterface {
  isLoggedIn: boolean;
  user: LoggedInUser | null;
  authModal: ModalState;
  logOut: () => void;
  login: () => void;
  showLoginModal: () => void;
  showSignUpModal: () => void;
  hideModal: () => void;
  handleAuthCheck: () => boolean;
}
const AuthContext = createContext<AuthContextInterface>({
  isLoggedIn: false,
  user: null,
  authModal: 'none',
  logOut: () => { },
  login: () => { },
  showLoginModal: () => { },
  showSignUpModal: () => { },
  hideModal: () => { },
  handleAuthCheck: () => { return false; }
})
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<null | LoggedInUser>(null)
  const [authModal, setAuthModal] = useState<ModalState>("none")

  function logOut() {
    // logout function implementation
    setIsLoggedIn(false)
  }

  function login() {
    // login function implementation
    setIsLoggedIn(true)
  }

  useEffect(() => {
    setUser({
      email: "jane@mail.com",
      name: "Jane"
    })
  }, [])

  function showLoginModal() {
    setAuthModal("login")
  }
  function showSignUpModal() {
    setAuthModal("register")
  }
  function hideModal() {
    setAuthModal("none")
  }

  function handleAuthCheck() {
    if (!isLoggedIn) {
      showLoginModal()
    }
    return isLoggedIn
  }

  const ModalType = {
    'login': <Login />,
    'register': <SignUp />,
    'none': null
  }
  return (
    <AuthContext.Provider value={{ user, handleAuthCheck, logOut, authModal, login, showLoginModal, hideModal, showSignUpModal, isLoggedIn }}>
      {children}
      <Modal isOpen={authModal !== "none"} onClose={hideModal}>
        {ModalType[authModal]}
      </Modal>
    </AuthContext.Provider>
  );

}

export function useAuth() {
  return useContext(AuthContext)
}