import { Cliente, PrismaClient } from '@prisma/client';
import prisma from '../infra/database';

export class ClienteModel {
	private prismaClient: PrismaClient;
	constructor(prismaClient: PrismaClient) {
		this.prismaClient = prismaClient;
	}
	async criarCliente(cliente: Cliente) {
		if (!cliente) {
			throw new Error('O argumento do metodo "criarCliente" deve ser valido');
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { id, criadoEm, atualizadoEm, ...payload } = cliente;
		const result = await this.prismaClient.cliente.create({
			data: payload
		});
		return result;
	}

	async buscarClientePorId(id: number) {
		const cliente = await this.prismaClient.cliente.findUnique({
			where: {
				id
			}
		});
		if (!cliente) {
			throw new Error('Cliente nao encontrado');
		}
		return cliente;
	}

	async buscarTodosClientes() {
		const clientes = await this.prismaClient.cliente.findMany();
		return clientes;
	}

	async atualizarCliente(cliente: Cliente) {
		if (!cliente) {
			throw new Error(
				'O argumento do metodo "atualizarCliente" deve ser valido'
			);
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { id, criadoEm, atualizadoEm, ...payload } = cliente;
		const result = await this.prismaClient.cliente.update({
			where: {
				id
			},
			data: payload
		});
		return result;
	}

	async deletarCliente(id: number) {
		const cliente = await this.prismaClient.cliente.delete({
			where: {
				id
			}
		});
		return cliente;
	}

	async buscarClientePorEmail(email: string) {
		const cliente = await this.prismaClient.cliente.findFirst({
			where: {
				email
			}
		});
		return cliente;
	}
	async buscarClientePorNome(nome: string) {
		const cliente = await this.prismaClient.cliente.findFirst({
			where: {
				nome
			}
		});
		return cliente;
	}

	async buscarClientePorTelefone(telefone: string) {
		const cliente = await this.prismaClient.cliente.findFirst({
			where: {
				telefone
			}
		});
		return cliente;
	}
}

export const clienteModel = new ClienteModel(prisma);
