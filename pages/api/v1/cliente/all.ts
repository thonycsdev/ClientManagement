import { NextApiRequest, NextApiResponse } from 'next';
import { clienteModel } from '../../../../models/clienteModel';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const result = await clienteModel.buscarTodosClientes();
		res.status(200).json(result);
	}
}
