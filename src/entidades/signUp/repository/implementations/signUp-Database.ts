import { SignUpRepository } from "../repository"
import { Prisma, SignUp } from "@prisma/client";
import { prisma } from "../../../../infrastructure/database/prisma";

export class SignUpDatabase implements SignUpRepository {
    async findById(id: number): Promise<SignUp | null> {
        const user = await prisma.signUp.findUnique({
            where:{
                id
            }
        });

        return user
    }
    async findEmail(email: string): Promise<SignUp | null> {
        const user = await prisma.signUp.findUnique({
            where:{
                email
            }
        });

        return user
    }
    async findPhone(phone: string): Promise<SignUp | null> {
        const user = await prisma.signUp.findFirst({
            where:{
                phone
            }
        });

        return user;
    }

    async signUp(data: Prisma.SignUpCreateInput): Promise<SignUp> {
        const user = await prisma.signUp.create({
            data
        });
        
        return user;
    }
}