import { Expose } from 'class-transformer';
import { PositionType } from 'src/enums/PositionType.enum';

export class AuthResponseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  first_name: string;

  @Expose()
  last_name: string;

  @Expose()
  role: string;

  @Expose()
  access_token: string;

  @Expose()
  position?: PositionType; // optional
}
