export interface SignInParamsSchema{
  email: string
  password: string
}
export interface SignInResponseSchema{
  access_token: string
	id: string
	email: string
	name: string
	createdAt: string
}