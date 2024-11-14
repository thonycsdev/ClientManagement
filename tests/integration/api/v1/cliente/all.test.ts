import UrlBuilder from '../../../../../utils/urlBuilder';

test('When GET should return array', async () => {
	const urlBuilder = UrlBuilder.instantiate(
		'http://localhost:3000/api/v1/cliente'
	);
	urlBuilder.addPathName('/all');
	const response = await fetch(urlBuilder.href);
	expect(response.status).toBe(200);
	const responseData = await response.json();
	expect(Array.isArray(responseData)).toBe(true);
});
