import { Post, Prisma } from "@prisma/client";


export interface CommentaryRepository {
    create(data: Prisma.PostCreateInput): Promise <Post>;
    getAll(): Promise <Post[] | null>;
    del(id: number): Promise <void>
    findById(id: number): Promise <Post | null>
}