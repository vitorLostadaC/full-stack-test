import { TextFieldProps as MuiTextFieldPropsSchema } from "@mui/material"
import { IconType } from "react-icons"

export type TextFieldPropsSchema = MuiTextFieldPropsSchema

export type PasswordInputUiSchema =
  | {
      type: "password"
      icon: IconType
      tooltipTitle: "Mostrar"
    }
  | {
      type: "text"
      icon: IconType
      tooltipTitle: "Ocultar"
    }
