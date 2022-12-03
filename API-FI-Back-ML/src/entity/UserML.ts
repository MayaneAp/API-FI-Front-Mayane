import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserML {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

}
