import { createContext, useState, useEffect, FC } from 'react'
import { useNavigate, useOutlet } from 'react-router-dom'

import { Supplier, User } from '../types/user'

type LoggedUser = Partial<Supplier & User>

type ContextData = {
  user?: LoggedUser
  login?: any
  logout?: any
  isSupplier?: boolean
}

export const AuthContext = createContext<ContextData>({})

const AuthProvider: FC<any> = () => {
  const [user, setUser] = useState<LoggedUser | undefined>(undefined)
  const navigate = useNavigate();
  const outlet = useOutlet();

  const login = (data: LoggedUser) => {
    setUser(data)
    window.localStorage.setItem('user', JSON.stringify(data))
    navigate(data.cnpj ? '/supplier' : '/home');
  }

  const logout = () => {
    setUser(undefined)
    window.localStorage.removeItem('user')
    navigate('/login');
  }

  useEffect(() => {
    if (user?.tokenExpiration && user?.tokenExpiration <= Date.now()) {
      let storageData = window.localStorage.getItem('user')

      if (storageData) {
        let userData: LoggedUser = JSON.parse(storageData)
        setUser(userData)
      }
      navigate('/home')
    } else {
      navigate('/login')
    }
  }, [])

  const contextValue = {
    user,
    login,
    logout,
    isSupplier: !!user?.cnpj,
  }

  return (
    <AuthContext.Provider value={contextValue}>{outlet}</AuthContext.Provider>
  )
}

export default AuthProvider
