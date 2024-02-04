import { Entity, PrimaryGeneratedColumn } from "typeorm"



export class Usuario {
   
    cnpj: string
    name: string
    email: string
    password: string
}