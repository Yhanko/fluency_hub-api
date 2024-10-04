import { SupportRepository } from "../supportRepository";
import { prisma } from "../../../../infrastructure/database/prisma";
import { Prisma, Support } from "@prisma/client";

export class SupportDataBase implements SupportRepository {
    
    async del(id: number): Promise<void> {
        await prisma.support.delete({
            where:{
                id
            }
        });
    }

    async getAll(): Promise<Support[] | null> {
        const contact = await prisma.support.findMany({});

        return contact
    }

    async register(data: Prisma.SupportCreateInput): Promise<Support> {
        const contact = prisma.support.create({
            data
        });

        return contact
    }
}