import { createContext, useContext, useState } from "react"
import { IAuthContext, IAuthProviderProps, IUserLogin } from "../interfaces/login"
import { router } from "expo-router"
 
const AuthContext = createContext<IAuthContext>({} as IAuthContext)
 
export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [user,setUser] = useState<IUserLogin>({userLogin:'',password:''})
 
    const handleLogin = () => {
      if(user.userLogin == '' && user.password == ''){
        router.push('home')
      } else {
        alert('Erro ao acessar!')
      }
    }
 
    const handleLogout = () => {
        setUser({userLogin: '', password: ''})
        router.push('/')
    }
       
    return (
        <AuthContext.Provider value={{user, handleLogin, setUser, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}
 
export function useAuth(){
    const context = useContext(AuthContext)
    return context
}