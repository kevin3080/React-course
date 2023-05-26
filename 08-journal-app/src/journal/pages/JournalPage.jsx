import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">JournalPage</Typography> 
  
      // component='h1' convierte la etiqueta Typography en una etiqueta h1 sin agregarle estilos
      // variant='h1' lo convierte y le da el valor que tiene un h1 en materialUi */}
      
    
    
      {/* NothingSelected */}
      <NothingSelectedView/>

      <IconButton
        size="large"
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>

      {/* NoteView */}
      {/* <NoteView/> */}
    </JournalLayout>

  )
}
