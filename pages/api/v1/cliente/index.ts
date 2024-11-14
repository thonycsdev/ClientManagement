import { NextApiRequest, NextApiResponse } from 'next';
import { clienteModel } from '../../../../models/clienteModel';
import { Cliente } from '@prisma/client';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const result = await clienteModel.buscarTodosClientes();
		res.status(200).json(result);
		return;
	}

	if (req.method === 'POST') {
		const request = JSON.parse(req.body) as Cliente;
		const result = await clienteModel.criarCliente(request);
		res.status(201).json(result);
	}
	res.status(405).json({ message: 'Hello World' });
}
