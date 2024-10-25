import { AllowNull, Column, DataType, HasMany, Model, Table, Unique } from 'sequelize-typescript';
import { Post } from '../posts/post.model';

@Table
export class User extends Model<User> {
  @Unique
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  username: string;

  @Unique
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @HasMany(() => Post)
  posts: Post[];
}
