import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate} from "typeorm";

@Entity({name: 'maratona'})
export class Maratona 
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'varchar', length: 255})
  aula: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;


  // @BeforeInsert()
  // beforeInsert()
  // {
  //   this.createDate = new Date();
  //   this.updateDate = new Date();
  // }

  // @BeforeUpdate()
  // beforeUpdate()
  // {
  //   this.updateDate = new Date();
  // }
}
