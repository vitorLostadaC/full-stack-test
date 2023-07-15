const requiredMessage = "Campo obrigatório"

const getRuleMinLenght = (minLenght: number) => ({
  value: minLenght,
  message: `Mínimo de ${minLenght} caracter${minLenght !== 1 ? "es" : ""}`
})

export const formFeedback = {
  general: {
    required: requiredMessage,
    minLenght: getRuleMinLenght
  }
}
