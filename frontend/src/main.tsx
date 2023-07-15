import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./styles/theme.ts"
import { CssBaseline } from "@mui/material"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./lib/queryClient.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
