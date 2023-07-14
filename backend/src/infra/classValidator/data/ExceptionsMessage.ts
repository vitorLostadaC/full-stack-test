export const ExceptionsMessage = {
  IsNotEmpty: "Campo obrigatório",
  IsEmail: "O email deve ser válido",
  MinLegth: (number: number) =>
    `O campo deve ter no mínimo ${number} caractéres`
}
