import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ type: String, default: 'join' })
  username: string
  @ApiProperty({ type: String, default: 'changeme' })
  password: string
}
