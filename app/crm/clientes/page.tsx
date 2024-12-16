'use client';
import { Paper } from '@mui/material';
import ClientTable from 'app/ui/table/client';
import keys from 'constants/keys';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Pagination } from 'types/pagination';

const defaultPagination = {
	page: 0,
	rowsPerPage: 10
};

async function fetcher(
	url: string,
	pagination: Pagination = defaultPagination
) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(pagination)
	});
	const data = await response.json();
	return data;
}

export default function Page() {
	const [pagination, setPagination] = useState<Pagination>(defaultPagination);

	const { data, isLoading, mutate } = useSWR(keys.client.all, (key) =>
		fetcher(key, pagination)
	);

	useEffect(() => {
		mutate();
	}, [pagination, mutate]);

	if (isLoading) return <div>Carregando...</div>;

	const handleChangePage = (pageNumber: number) => {
		setPagination({ ...pagination, page: pageNumber });
	};
	const handleChangeRowsPerPage = (rowNumber: number) => {
		setPagination({ ...pagination, rowsPerPage: rowNumber });
	};

	return (
		<>
			<Paper
				sx={{
					width: '80%',
					margin: 'auto'
				}}
				variant="elevation"
				elevation={5}
			>
				<ClientTable
					clients={data.clientes}
					amount={data.total}
					pagination={pagination}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</>
	);
}
