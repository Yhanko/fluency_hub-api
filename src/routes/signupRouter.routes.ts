import { Router } from 'express';
import { signUpController } from "../entidades/signUp/controllers/signUpController";

const signUpRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /user/v1/usuarios:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: Nome do usuário
 *               lastname:
 *                 type: string
 *                 description: Sobrenome do usuário
 *               email:
 *                 type: string
 *                 description: E-mail do usuário
 *               phone:
 *                 type: string
 *                 description: Telefone do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - phone
 *               - password
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro de validação
 *       409:
 *         description: Conflito, e-mail já cadastrado
 */

/**
 * @swagger
 * /user/v1/session:
 *   post:
 *     summary: Autentica um usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: E-mail do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Sessão autenticada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para acesso
 *       401:
 *         description: Credenciais inválidas
 */

/**
 * @swagger
 * /user/v1/me:
 *   get:
 *     summary: Retorna o perfil do usuário autenticado
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do usuário
 *                 firstname:
 *                   type: string
 *                   description: Nome do usuário
 *                 lastname:
 *                   type: string
 *                   description: Sobrenome do usuário
 *                 email:
 *                   type: string
 *                   description: E-mail do usuário
 *                 phone:
 *                   type: string
 *                   description: Telefone do usuário
 *       401:
 *         description: Token não fornecido ou inválido
 */

signUpRoutes.post('/set', signUpController);

signUpRoutes.get('/get', );

signUpRoutes.get('/:id', );

export default signUpRoutes;
