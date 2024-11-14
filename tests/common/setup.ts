import prisma from '../../infra/database';
import orchestrator from './orchestrator';

beforeAll(async () => {
	await orchestrator.waitForAllServices();
});

afterAll(async () => {
	const deletecliente = prisma.cliente.deleteMany();
	await prisma.$transaction([deletecliente]);
});
