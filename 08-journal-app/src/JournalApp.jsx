import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"


export const JournalApp = () => {
  return (
   /*  <>
        <AppRouter />
    </> */
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}
