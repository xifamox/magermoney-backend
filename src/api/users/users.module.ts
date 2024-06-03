import { Module } from '@nestjs/common';

import { UsersController } from '@/api/users/users.controller';
import { UsersService } from '@/api/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
