import { createTheme } from "@mui/material"
import { ptBR } from "@mui/material/locale"
import "@mui/material/styles/createPalette"

export const textFieldHeight = "40px"

export const theme = createTheme(
  {
    typography: {
      fontFamily: "Inter"
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
            * {
                margin: 0;
                padding:0;
                box-sizing: border-box;
            }
            
            html {
                font-size: 62.5%;
            }
           
            `
      }
    }
  },
  ptBR
)
