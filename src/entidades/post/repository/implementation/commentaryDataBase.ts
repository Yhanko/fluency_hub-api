import { Prisma, Post } from "@prisma/client";
import { CommentaryRepository } from "../commentaryRepository";
import { prisma } from "../../../../infrastructure/database/prisma";



export class CommentaryDataBase implements CommentaryRepository {
    async create(data: Prisma.PostCreateInput): Promise<Post> {
        const post = await prisma.post.create({
            data
        });

        return post
    }

    async getAll(): Promise<Post[] | null> {
        const post = await prisma.post.findMany({});

        if(!post){
            return null
        }

        return post
    }

    async del(id: number): Promise<void> {
        await prisma.post.delete({
            where:{
                id
            }
        });
    }

    async findById(id: number): Promise<Post | null> {
        const post = await prisma.post.findFirst({
            where:{
                id
            }
        });

        if(!post){
            return null
        }

        return post
    }
}