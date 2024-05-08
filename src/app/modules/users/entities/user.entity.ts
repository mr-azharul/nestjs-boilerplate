import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column({
        type: "varchar",
        length: 255
    })
    name: string;

    @Column({
        type: "varchar",
        length: 255
    })
    email: string;

    @Column({
        type: "varchar",
        length: 255
    })
    phone: string;

    @Column({
        type: "varchar",
        length: 255
    })
    bio: string;

    @Column({
        type: "varchar",
        length: 255
    })
    password: string;

    @Column({
        type: "varchar",
        length: 255
    })
    status: string;

    @Column({
        type: "varchar",
        length: 255,
        array: true
    })
    roles: string[];

    @Column({
        type: "varchar",
        length: 255
    })
    created: string;
}