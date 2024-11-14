import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../infra/database';
import { ResponseData } from '../pages/api/v1/status';

export class StatusModel {
	private _prisma: PrismaClient;
	constructor(prisma: PrismaClient) {
		this._prisma = prisma;
	}
	async buildStatusResponse(): Promise<ResponseData> {
		const responseData = {
			database: null,
			created_at: new Date(),
			message: 'SERVER_OK'
		};
		try {
			responseData.database = await this.buildDatabaseStatus();
			responseData.message = 'SERVER_OK';
		} catch {
			responseData.message = 'SERVER_ERROR';
		} finally {
			return responseData;
		}
	}

	async buildDatabaseStatus() {
		const versionResult = await this._prisma.$queryRaw`SELECT version();`;
		const maxConnectionsRestuls = await this._prisma
			.$queryRaw`SHOW max_connections;`;
		const databaseName = process.env.DATABASE_NAME;
		const activeConnectionsResult = await this._prisma.$queryRaw(
			Prisma.sql`SELECT COUNT(*)::int FROM pg_stat_activity psa where psa.datname=${databaseName};`
		);

		const database = {
			version: getOnlyDatabaseNameVersion(versionResult[0].version),
			max_connections: +maxConnectionsRestuls[0].max_connections,
			active_connections: activeConnectionsResult[0].count
		};
		return database;
	}
}
export function getOnlyDatabaseNameVersion(value: string): string {
	const result = value.split(' ').splice(0, 2).join(' ');
	return result;
}

const statusModel = new StatusModel(prisma);
export default statusModel;
