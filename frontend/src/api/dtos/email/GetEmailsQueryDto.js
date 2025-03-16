import { PaginationDto } from '../PaginationDto';

export class GetEmailsQueryDto {
    // TODO: Add filters for searching.
    pagination = new PaginationDto()

    /**
     * @param {PaginationDto} pagination - Pagination props.
     */
    constructor(pagination) {
        this.pagination = new PaginationDto(pagination.page, pagination.pageSize);
    }
}
