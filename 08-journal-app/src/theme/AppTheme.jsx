import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"

export const AppTheme = ({children}) => {
  return (

    //Ver documentasion de @mui
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
