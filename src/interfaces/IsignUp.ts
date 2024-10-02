import { Courses, SignUp } from "@prisma/client";

export interface Request{
    userId: number
}

export interface Response {
    user: SignUp
}

export interface RequestUser {
    fullName: string, 
    email: string, 
    phone: string,  
    course: Courses, 
    identityCard: string
}