import { api } from "../../lib/api";
import { SignInParamsSchema, SignInResponseSchema } from "./AuthService.schema";

export const signIn = (params: SignInParamsSchema): Promise<SignInResponseSchema> => api.post("/signIn", params)