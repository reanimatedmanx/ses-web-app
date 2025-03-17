/**
 *
 * @constructor
 * @property {number} page - The current page number.
 * @property {number} pageSize - The number of items per page.
 */
export class PaginationDto {
	page = 1
	pageSize = 100

	constructor(page, pageSize) {
		this.page = page
		this.pageSize = pageSize
	}
}
