import { TextFieldProps as MuiTextFieldPropsSchema } from "@mui/material"
import { IconType } from "react-icons"

export type TextFieldPropsSchema = MuiTextFieldPropsSchema & {
  /**
   * input type password
   * add feature hide/show password
   * @default false
   */
  password?: boolean
}

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
