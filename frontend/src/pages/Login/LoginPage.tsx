import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { LoginInputsSchema } from "./LoginPage.schema"
import Grid from "@mui/material/Grid"
import { Container, Stack, TextField } from "@mui/material"
import { formFeedback } from "../../data/formFeedback"
import { useMutation } from "react-query"
import { signIn } from "../../services/Auth/AuthService"
import { SignInParamsSchema } from "../../services/Auth/AuthService.schema"
import { TextFieldPassword } from "../../components/TextFieldPassword/TextFieldPassword"
import { ExceptionApiResponseSchema } from "../../lib/api.schema"
import { useAuthContext } from "../../contexts/AuthContext/AuthContext"
import { toast } from "react-toastify"

export const LoginPage = () => {
  const { saveAuthenticatedUser } = useAuthContext()

  const methods = useForm<LoginInputsSchema>({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = methods

  const signInMutate = useMutation({
    mutationFn: (params: SignInParamsSchema) => signIn(params),
    onSuccess: ({ access_token, ...user }) => {
      saveAuthenticatedUser({ access_token, user })
    },
    onError: (error: ExceptionApiResponseSchema) => {
      toast.error(error.message)
      if (!error.fields) return

      const fieldErrors = Object.keys(
        error.fields
      ) as (keyof LoginInputsSchema)[]

      fieldErrors.forEach((key) =>
        setError(key, { message: error?.fields?.[key] })
      )
    }
  })

  const onSubmit: SubmitHandler<LoginInputsSchema> = (data) => {
    signInMutate.mutate(data)
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
                  <TextFieldPassword
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
