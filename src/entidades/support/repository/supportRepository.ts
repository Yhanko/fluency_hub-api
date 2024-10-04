import { Prisma, Support } from "@prisma/client";


export interface SupportRepository {
    register(data: Prisma.SupportCreateInput): Promise <Support>;
    getAll(): Promise <Support[] | null >;
    del(id: number): Promise <void>
}