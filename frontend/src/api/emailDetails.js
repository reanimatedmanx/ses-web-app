import useSWR from 'swr'
import { fetcher } from './_utils'
import { EMAILS_API_PATH } from './_endpoints'
import { EmailDto } from './dtos/email'

/**
 *
 * @param {GetEmailsQueryDto} queryParams
 * @returns {Array<string | Object>}
 */
export const getEmailCacheKey = (id) => [EMAILS_API_PATH, id]

/**
 * Server-side fn to pre-fetch a single email data by id.
 *
 * @param {number} id - The pagination Id.
 * @returns {Promise<EmailDto>} - The fetched Email data.
 */
export const getEmailDetailsById = (id) => fetcher(getEmailCacheKey(id))

/**
 * Client-side hook to fetch a single email data by id.
 *
 * @param {number} id - The pagination Id.
 * @returns {SWRResponse<EmailDto>} - The fetched Email data.
 */
export const useEmailDetails = (id) => useSWR(getEmailCacheKey(id), fetcher)
