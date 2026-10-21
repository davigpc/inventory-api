import {
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { PrismaService } from '@database/prisma/prisma.service';

/**
 * Endpoints internos de leitura do monólito durante a transição.
 * Usados pelo serviço de Estoque para validar usuários enquanto a Identidade
 * ainda não foi extraída. Não é exposto pelo NGINX.
 */
@Controller('internal')
export class InternalController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('users/:id')
  async user(@Param('id') id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user || user.deletedAt !== null) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      warehouseId: user.warehouseId,
    };
  }
}
