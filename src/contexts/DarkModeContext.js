import { createContext, useState } from "react"

export const Context = createContext(null); 
const DarkModeContext = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <Context.Provider value={{ theme, setTheme }}>
            {children}
        </Context.Provider>
    )
}

export default DarkModeContext;