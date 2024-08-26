import { createContext,useContext } from "react"


//feeding initial value for themecontext.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})


export const ThemeProvider = ThemeContext.Provider

//custom hook to use the themecontext.
export default function useTheme(){
    return useContext(ThemeContext)
}