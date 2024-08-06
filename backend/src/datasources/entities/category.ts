import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import "reflect-metadata";
import { Section } from "./section";

@ObjectType()
  @Entity()
  export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id?: number;
  
    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

    @OneToMany(() => Section, section => section.category)
    sections?: Section[];

    constructor(
      name: string = '',
      description: string = ''
    ) {
      super();
        this.name = name;
        this.description = description;
      }
}