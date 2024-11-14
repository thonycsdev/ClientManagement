import { URLSearchParams } from 'url';

export default class UrlBuilder {
	private _url: URL;
	private constructor(url: string) {
		this._url = new URL(url);
	}

	static instantiate(url: string): UrlBuilder {
		return new UrlBuilder(url);
	}

	addSearchParams(
		params:
			| URLSearchParams
			| string
			| Record<string, string | readonly string[]>
			| Iterable<[string, string]>
			| ReadonlyArray<[string, string]>
	) {
		const sp = new URLSearchParams(params);
		this._url.search += sp;
	}

	getSearchParams() {
		return this._url.searchParams;
	}

	addPathName(pathname: string) {
		this._url.pathname += pathname;
		return this.href;
	}

	get href() {
		return this._url.href;
	}
}
