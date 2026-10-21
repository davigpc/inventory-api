import { MovementType as PrismaMovementType } from '@prisma/client';

/**
 * MovementTypeMapper (camada anticorrupção)
 *
 * Cópia local mínima do mapper do módulo `movements`, criada na extração do
 * grupo atômico para que o módulo `reports` não dependa mais de `movements`.
 */
export class MovementTypeMapper {
  static toPersistence(type: string): PrismaMovementType {
    if (type === 'ENTRADA') return PrismaMovementType.ENTRADA;
    if (type === 'SALIDA') return PrismaMovementType.SALIDA;
    throw new Error(`Invalid movement type: ${type}`);
  }
}
