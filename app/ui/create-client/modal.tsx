import { Box, SwipeableDrawer } from '@mui/material';
import CreateClientForm from './createClientForm';
type propsType = {
	onClose: () => void;
	isOpen: boolean;
};
export default function ModalCreateClient(props: propsType) {
	return (
		<Box>
			<SwipeableDrawer
				anchor="right"
				open={props.isOpen}
				onClose={props.onClose}
				onOpen={() => console.log('Im open')}
			>
				<CreateClientForm />
			</SwipeableDrawer>
		</Box>
	);
}
