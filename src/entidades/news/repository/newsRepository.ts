import { Newslater } from "@prisma/client";

export interface NewsRepository {
    register(email: string): Promise <Newslater>;
    get():Promise <Newslater[] | null>;
    findEmail(email: string): Promise <Newslater | null>
}