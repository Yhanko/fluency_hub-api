import { SignUpRepository } from "../repository"
import { Prisma, SignUp } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { string } from "zod";

export class InMemmoryRepository implements SignUpRepository {
    public users: SignUp[] = [];

    async findById(id: number): Promise<SignUp | null> {
        const user = this.users.find((user) => user.id === id);
        return user || null;  
    }

    async findEmail(email: string): Promise<SignUp | null> {
        const user = this.users.find((user) => user.email === email);
        return user || null;
    }
    async findPhone(phone: string): Promise<SignUp | null> {
        const user = this.users.find((user) => user.phone === phone);
        return user || null;
    }
    async signUp(data: Prisma.SignUpCreateInput): Promise<SignUp> {

        let currentId = 0;

        const generateId = () => {
            return ++currentId;
        };

        const user: SignUp = {
            id: generateId(),
            fullName: data.fullName,  
            email: data.email,
            phone: data.phone, 
            course: data.course,
            identityCard: data.identityCard,
            createdAt: new Date()
        }

        this.users.push(user);
        return user
    }


}