/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TextField as MuiTextField, Tooltip } from "@mui/material"
import { forwardRef, useState } from "react"
import { PasswordInputUiSchema, TextFieldPropsSchema } from "./TextField.schema"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export const TextField = forwardRef<HTMLDivElement, TextFieldPropsSchema>(
  ({ password, ...textFieldProps }: TextFieldPropsSchema, ref) => {
    const [passwordInputUi, setPasswordInputUi] =
      useState<PasswordInputUiSchema>({
        type: "password",
        icon: AiOutlineEye,
        tooltipTitle: "Mostrar"
      })

    const Icon = passwordInputUi.icon

    const switchPasswordInputUi = () => {
      setPasswordInputUi(
        passwordInputUi.type === "password"
          ? {
              type: "text",
              icon: AiOutlineEyeInvisible,
              tooltipTitle: "Ocultar"
            }
          : { type: "password", icon: AiOutlineEye, tooltipTitle: "Mostrar" }
      )
    }
    const passwordArgs = {
      type: passwordInputUi.type,
      InputProps: {
        ...textFieldProps.InputProps,
        endAdornment: (
          <Tooltip title={passwordInputUi.tooltipTitle}>
            <Icon
              style={{ cursor: "pointer" }}
              onClick={switchPasswordInputUi}
              size={25}
            />
          </Tooltip>
        )
      }
    }

    const args = {
      ref: ref,
      ...(password && passwordArgs),
      ...textFieldProps
    }

    return <MuiTextField {...args} />
  }
)
