import {
	Card,
	CardActionArea,
	CardContent,
	Grid2,
	Typography
} from '@mui/material';

type props = {
	label: string;
	content: string;
};
export default function CardForLayout({ label, content }: props) {
	return (
		<Grid2 size={1}>
			<Card>
				<CardActionArea>
					<CardContent>
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>
							{label}
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{content}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid2>
	);
}
