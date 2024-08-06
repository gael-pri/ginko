import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import "reflect-metadata";
import { Category } from "./category";
import { Chapter } from "./chapter";
  
@ObjectType()
  @Entity()
  export class Section extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id_section?: number;
  
    @Column()
    @Field()
    name: string;

    @ManyToOne(() => Category, category => category.sections, { eager: true })
    @JoinColumn({ name: "categoryId" })
    category?: Category;

    @Column()
    @Field()
    categoryId: string;

    @OneToMany(() => Chapter, chapter => chapter.section)
    chapters?: Chapter[];

    constructor(
      name: string = '', 
      categoryId: string= '',
    ) {
      super();
        this.name = name;
        this.categoryId = categoryId;
      }
}