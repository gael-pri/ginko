import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import "reflect-metadata";
import { Article } from "./article";
  
@ObjectType()
  @Entity()
  export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id_tag?: number;
  
    @Column({ nullable: true })
    @Field()
    name?: string;

    @ManyToMany(() => Article, article => article.tags)
    articles?: Article[];

    constructor(
      name?: string, 
    ) {
      super();
        this.name = name;
      }
}