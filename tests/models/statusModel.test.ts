import { mockDeep } from 'jest-mock-extended';
import {
	getOnlyDatabaseNameVersion,
	StatusModel
} from '../../models/statusModel';
import { PrismaClient } from '@prisma/client';

describe('Status Model Tests', () => {
	test('Deveria retornar somente o nome PostgreSQL 13.4 como versao do postgres sendo uma string', () => {
		const versionResult = [
			{
				version:
					'PostgreSQL 13.4 on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0, 64-bit'
			}
		];
		const result = getOnlyDatabaseNameVersion(versionResult[0].version);
		expect(result).toBe('PostgreSQL 13.4');
	});

	test('Se ao criar o objeto de database ocorrer um throw, deveria retornar a messagem como SERVER_ERROR', async () => {
		const prisma = mockDeep<PrismaClient>();
		prisma.$queryRaw.mockRejectedValueOnce(
			new Error('Erro ao conectar ao banco de dados')
		);
		const statusModel = new StatusModel(prisma);
		const result = await statusModel.buildStatusResponse();
		expect(result.message).toBe('SERVER_ERROR');
		expect(result.database).toBe(null);
	});
});
