import { ReactNode } from "react"
 
export interface IUserLogin {
    userLogin: string
    password: string
}
 
export interface IAuthContext {
    user: IUserLogin
    setUser: (user: IUserLogin) => void
    handleLogin: () => void
    handleLogout: () => void
}
 
export interface IAuthProviderProps {
    children: ReactNode
}