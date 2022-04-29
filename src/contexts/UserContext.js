import { createContext, useState } from "react"

export const AuthContext = createContext(null); 

const injectAuthContext = Component => {
    const UserContext = (props) => {
        const [auth, setAuth] = useState({
            'name': 'Luis J. Rodriguez O.',
            'email': 'lrodriguez@4geeks.co'
        });
    
        return (
            <AuthContext.Provider value={{ auth, setAuth }}>
                <Component {...props} />
            </AuthContext.Provider>
        )
    }
    
    return UserContext;
}

export default injectAuthContext;