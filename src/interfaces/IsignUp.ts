import { Courses, SignUp } from "@prisma/client";

export interface Request{
    id: number
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