import {StringMap} from "ts-jest";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('clients')
export class User {
    @PrimaryGeneratedColumn('identity', {generatedIdentity: 'ALWAYS'})
    id: number;

    @Column()
    name: String;

    @Column({
        type: 'varchar',
        nullable: false
    })
    surname: String;

    @Column()
    patronymic: String;

    @Column()
    phone: String;
}