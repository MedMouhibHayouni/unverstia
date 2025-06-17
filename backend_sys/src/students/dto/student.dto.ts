import { Expose } from 'class-transformer';

export class StudentDto {
  @Expose()
  user_id: number;

  @Expose()
  first_name: string;

  @Expose()
  last_name: string;

  @Expose()
  email: string;

  @Expose()
  student_id: string;

  @Expose()
  level: string;

  @Expose()
  profile_picture: string;
}
