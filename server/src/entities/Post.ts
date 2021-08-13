import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('Post')
class Post {
  @PrimaryColumn()
  id: string;

  @Column()
  title!: string ;

  @Column()
  content!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor() {
    this.id = uuid()
  }
}

export default Post
