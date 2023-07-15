import * as React from "react"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { TextField } from "../../components/TextField/TextField"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { LoginInputsSchema } from "./LoginPage.schema"
import Grid from "@mui/material/Grid"
import { Container, Stack } from "@mui/material"
import { formFeedback } from "../../data/formFeedback"

export default function Login() {
  const methods = useForm<LoginInputsSchema>({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = methods

  const onSubmit: SubmitHandler<LoginInputsSchema> = (data) => {
    console.log(data)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Stack
        sx={{
          mt: 8,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Grid container gap={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                rules={{
                  required: formFeedback.general.required
                }}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="E-mail"
                    autoComplete="email"
                    autoFocus
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                rules={{
                  required: formFeedback.general.required,
                  minLength: formFeedback.general.minLenght(6)
                }}
                name="password"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Senha"
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Entrar
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
