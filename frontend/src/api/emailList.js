import useSWR from 'swr'
import { fetcher } from './_utils'
import { EMAILS_API_PATH } from './_endpoints'
import { GetEmailsQueryDto } from './dtos/email'
import { GetEmailsResponseDto } from './dtos/email'

/**
 * 
 * @param {GetEmailsQueryDto} queryParams 
 * @returns {Array<string | Object>}
 */
export const getEmailsCacheKey = (queryParams) => [EMAILS_API_PATH, queryParams]

/**
 * Server-side fn to pre-fetch a list of paginated Emails data.
 * @param {GetEmailsQueryDto} queryParams
 * @returns {Promise<GetEmailsResponseDto>} The fetched Emails data.
 */
export const getEmails = (queryParams) => fetcher(getEmailsCacheKey(queryParams))

/**
 * Client-side hook to fetch paginated Emails data.
 * 
 * @param {GetEmailsQueryDto} queryParams - The pagination parameters.
 * @returns {SWRResponse<GetEmailsResponseDto>} The fetched Emails data.
 */
export const useEmails = (queryParams) => useSWR(
    getEmailsCacheKey(queryParams),
    fetcher,
    { keepPreviousData: true }
)
