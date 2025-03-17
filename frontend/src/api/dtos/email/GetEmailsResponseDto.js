import { PaginationDto } from '../PaginationDto'

export class GetEmailsResponseDto {
	items = []
	itemsTotal = 0
	pagination = new PaginationDto()

	/**
	 * @param {Array<EmailDto>} items    - All the items for this search query.
	 * @param {number} itemsTotal        - The total number of items.
	 * @param {PaginationDto} pagination - Pagination props.
	 */
	constructor(items, itemsTotal, pagination) {
		this.items = items
		this.itemsTotal = itemsTotal
		this.pagination = new PaginationDto(pagination.page, pagination.pageSize)
	}
}
