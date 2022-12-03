import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class LivrosML {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    year: number

}
