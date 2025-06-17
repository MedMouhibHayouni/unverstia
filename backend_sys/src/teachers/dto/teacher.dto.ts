import { Expose } from 'class-transformer';

export class TeacherDto {
  @Expose()
  user_id: number;

  @Expose()
  first_name: string;

  @Expose()
  last_name: string;

  @Expose()
  email: string;

  @Expose()
  profile_picture: string;

  @Expose()
  position: string;
}
