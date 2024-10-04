import { NewsRepository } from "../newsRepository";
import { prisma } from "../../../../infrastructure/database/prisma";
import {  Newslater  } from "@prisma/client";

export class NewsLattersDataBase implements NewsRepository {

    async findEmail(email: string){
        const user = await prisma.newslater.findUnique({
            where:{
                email
            }
        });

        if(!user){
            return null
        }

        return user
    }
    async register(email: string): Promise< Newslater> {
        const user = await prisma.newslater.create({
            data:{
                email
            }
        });
        
        return user
    }

    async get(): Promise<Newslater[] | null>{
        const user = await prisma.newslater.findMany({});
        
        if(!user){
            return null
        }

        return user
    }
}