import { Prisma, SignUp } from "@prisma/client";

export interface SignUpRepository {
  signUp(data: Prisma.SignUpCreateInput): Promise<SignUp>;
  findEmail(email: string): Promise <SignUp | null>;
  findPhone(phone: string): Promise <SignUp | null>;
  findById(id: number): Promise <SignUp | null>
}