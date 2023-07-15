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
           
            `
      },
      MuiTableCell: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderBottom: "0px",
            paddingBottom: "0px",
            paddingTop: "0px",
            height: "44px",
            "&:first-of-type": {
              paddingLeft: "30px"
            },
            "&:last-of-type": {
              paddingRight: "30px"
            }
          })
        }
      },
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => ({
            ".MuiTableCell-head": {
              backgroundColor: "#E6EAEE",
              fontWeight: 600
            }
          })
        }
      },

      MuiTableRow: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&:nth-of-type(odd)": {
              backgroundColor: theme.palette.common.white
            },
            "&:nth-of-type(even)": {
              backgroundColor: "#f1f1f1"
            },
            ":hover": {
              background: "#f1f0ff"
            }
            // hide last border
            /* "&:last-child td, &:last-child th": {
                border: 0,
            }, */
          })
        }
      }
    }
  },
  ptBR
)
