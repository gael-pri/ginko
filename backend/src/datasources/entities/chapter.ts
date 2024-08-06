import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import "reflect-metadata";
import { Article } from "./article";
import { Section } from "./section";
  
@ObjectType()
  @Entity()
  export class Chapter extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id_chapter?: number;
  
    @Column()
    @Field()
    title: string;

    @Column({ nullable: true })
    @Field()
    description?: string;

    @ManyToOne(() => Section, section => section.chapters, { eager: true })
    @JoinColumn({ name: "sectionId" })
    section?: Section;

    @Column()
    @Field()
    sectionId: string;

    @OneToMany(() => Article, article => article.chapter)
    articles?: Article[];
    
    constructor(
      title: string = '',
      description?: string,
      sectionId: string= '',
    ) {
      super();
        this.title = title;
        this.description = description;
        this.sectionId = sectionId;
      }
}