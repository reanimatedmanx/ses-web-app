import { PaginationDto } from '../PaginationDto'

export class GetEmailsQueryDto extends PaginationDto {
	query = ''

	constructor(params) {
		super(params.page, params.pageSize)

		this.query = params.query
	}
}
