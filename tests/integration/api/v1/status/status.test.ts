describe('/Status API', () => {
	test('Should Return 200', async () => {
		const response = await fetch('http://localhost:3000/api/v1/status');
		expect(response.status).toBe(200);
	});

	test('Response data', async () => {
		const response = await fetch('http://localhost:3000/api/v1/status');
		const responseData = await response.json();
		expect(responseData.created_at).toBeDefined();
		expect(responseData.message).toBe('SERVER_OK');
		expect(responseData.database).toBeDefined();
		expect(responseData.database.version).toBe('PostgreSQL 16.0');
		expect(responseData.database.max_connections).toBeGreaterThan(10);
		expect(responseData.database.active_connections).toBeLessThan(1);
	});
});
