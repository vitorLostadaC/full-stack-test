import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./styles/theme.ts"
import { CssBaseline } from "@mui/material"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./lib/queryClient.ts"
import { AuthContextProvider } from "./contexts/AuthContext/AuthContext.tsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </AuthContextProvider>
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
