/**
 * The fetcher function used by SSR and SWR
 *
 * @param {string} url
 * @param {RequestInit | string} params
 * @returns {Promise}
 */
export const fetcher = ([url, queryParams], body) => {
	const query = queryParams
		? typeof queryParams == 'object'
			? `?${new URLSearchParams(queryParams).toString()}`
			: `/${queryParams}`
		: null

	const fullUrl = query ? `${url}${query}` : url
	return fetch(fullUrl, {
		body,
	}).then((res) => res.json())
}
