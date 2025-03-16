import { SWRConfig, unstable_serialize } from 'swr'
import { Box } from '@mui/material'
import { getEmailsCacheKey, getEmails, useEmails } from '@/api/email-list'
import { MailList } from '@/components'

export async function getServerSideProps() {
    const emailQueryParams = {
      page: 1,
      pageSize: 100
    }

    const emailsKey = unstable_serialize(getEmailsCacheKey(emailQueryParams))
    const emails = await getEmails(emailQueryParams)

    return {
        props: {
          fallback: {
              [emailsKey]: emails
          }
        }
    }
}

function Emails() {
    // TODO: Add actual virtual scrolling.
    const { isLoading, error, data } = useEmails({
      page: 1,
      pageSize: 100,
    })

    if (isLoading) return <code>...</code>
    if (error) return <code>Failed to load</code>
    if (!data?.items?.length) return <div>No emails yet</div>

    return (
      <Box display="flex">
        <MailList inboxItems={data.items}/>
        <Box>No selected mail.</Box>
      </Box>
    )
}

export default function EmailsPage({ fallback }) {
    return (
      <SWRConfig fallback={{ fallback }}>
          <Emails />
      </SWRConfig>
    )
}
