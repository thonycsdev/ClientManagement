import { Button } from '@mui/material';
type props = {
	onClick: () => void;
};
export default function CreateNewClientButton({ onClick }: props) {
	return (
		<>
			<Button
				sx={{
					bgcolor: 'primary.main',
					color: 'white',
					marginY: 3,
					width: 'fit-content',
					alignSelf: 'end'
				}}
				onClick={onClick}
			>
				Cadastrar Cliente
			</Button>
		</>
	);
}
