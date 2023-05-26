import { Box } from "@mui/material"
import { Navbar, SideBar } from "../components";

const drawerWidth = 240;


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/* Navbar  drawerWidth */}
        

        <Navbar drawerWidth={ drawerWidth } />


        {/* Sidebar  drawerWidth */}
        <SideBar drawerWidth={ drawerWidth } />

        {/* Por defecto la etiqueta <Box></Box> es un <div></div> */}
        {/* component='main'  lo convierte a <main></main>*/}
        <Box 
            component='main'
            sx={{flexGrow: 1, p: 2, mt: 8}}
        >
            {/* Toolbar */}

            {children}
        </Box>
    </Box>
  )
}
