import { Button, Container, Grid2, TextField, Typography } from "@mui/material";

export default function CreateClientForm() {
	return <>
		<Container>
			<Typography>
				Cadastro de novo cliente
			</Typography>
			<Grid2 container columns={4} spacing={4}>
				<Grid2 size={3}>
					<TextField fullWidth required label="Nome Completo" />
				</Grid2>
				<TextField required label="CPF" />
				<Grid2 size={2}>
					<TextField fullWidth required label="Endereço" />
				</Grid2>
				<Grid2 size={2}>
					<TextField fullWidth required label="Email" />
				</Grid2>
				<TextField label="Número de Telefone" />
				<TextField required label="Número de Telefone Pessoal" />
				<TextField label="Facebook" />
				<TextField label="Instagram" />
				<TextField label="Whatsapp" />
				<TextField required label="Ocupação" />
				<TextField label="Cargo" />
				<TextField required label="Renda" />
				<TextField required label="Estado Civil" />
				<TextField required type="number" defaultValue={1} label="Quantidade de Membros na Família" />
				<TextField required type="date" label="Data de Nascimento" />
				<Grid2>
					<TextField required multiline label="Descrição" />
				</Grid2>
			</Grid2>
			<Button variant="contained">Cadastrar</Button>
		</Container>
	</>;
}

