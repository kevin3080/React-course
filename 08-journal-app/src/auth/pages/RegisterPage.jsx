import { Link as RouterLink } from "react-router-dom" // <------- import {any as AliasName} from '' 
// asi evitamos un conflicto al importar dos Link de varias librerias
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create Account">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label="Nombre Completo" 
                            type="text" 
                            placeholder="Full Name" 
                            fullWidth
                            />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@google.com" 
                            fullWidth
                            />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label="Contraseña" 
                            type="pasword" 
                            placeholder="contraseña" 
                            fullWidth
                            />
                    </Grid>

                    <Grid container spacing={2} sx={{mb:2, mt:1}}>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                         Log In
                        </Link>
                        
                    </Grid>
                </Grid>
            </form>

    </AuthLayout>

  )
}

