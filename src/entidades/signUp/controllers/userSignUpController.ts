import { Request, Response } from "express";
import { userSignUpProfileFactory } from "../fatories/signUpfileFatory"; 

export async function userSignUpController(request: Request, response: Response) {
    try {
        
    } catch (err) {

        return response.status(500).json({ message: "Ocorreu um erro ao buscar o perfil do usuário." });
    }
}
