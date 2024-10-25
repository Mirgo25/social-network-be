import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class Post extends Model<Post> {
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  title: string;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
  })
  content: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
