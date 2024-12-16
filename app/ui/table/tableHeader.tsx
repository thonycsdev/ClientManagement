import { Grid2 } from '@mui/material';
import CardForLayout from './card';

type props = {
	clientAmount: number;
};
export default function HeaderTable({ clientAmount }: props) {
	return (
		<>
			<Grid2 container columns={3} spacing={3} m={'auto'} my={10} width={'80%'}>
				<CardForLayout
					label={'Número de Clientes'}
					content={clientAmount.toString()}
				/>
				<CardForLayout label={'Novos Clientes esse Mês'} content={'0'} />
				<CardForLayout label={'Média de Avalição dos Clientes'} content={'0'} />
			</Grid2>
		</>
	);
}
