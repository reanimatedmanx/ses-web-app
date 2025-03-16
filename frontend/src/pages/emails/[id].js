import { useRouter } from 'next/router'
import { SWRConfig, unstable_serialize } from 'swr'
import { Container } from '@/components/'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { MailList } from '@/components'
import { getEmailsCacheKey, getEmails, useEmails } from '@/api/email-list'
import { getEmailCacheKey, getEmailDetailsById, useEmailDetails } from '@/api/email-details'

export async function getServerSideProps({ params, query }) {
  const emailQueryParams = {
    page: 1,
    pageSize: 100
  }

  const emailsKey = unstable_serialize(getEmailsCacheKey(emailQueryParams))
  const emailKey = unstable_serialize(getEmailCacheKey(query.id))

  const [emails, selectedEmail] = await Promise.all([
    getEmails(emailQueryParams),
    getEmailDetailsById(query.id)
  ])

  return {
    props: {
      id: query.id,
      fallback: {
        [emailsKey]: emails,
        [emailKey]: selectedEmail,
      }
    }
  }
}

function Emails() {
  const { error, data } = useEmails({
    page: 1,
    pageSize: 100,
  })

  if (error) return <div>Failed to load</div>
  if (!data?.items?.length) return <div>...</div>

  return <MailList inboxItems={data.items} isLoading/>
}

function EmailDetails({ id }) {
  const { error, data } = useEmailDetails(id)

  if (error) return <div>Failed to load</div>

  return (
    <Container>
      {/* TODO: Beautify this calc, extract to a separate component, extract `42` magic number to const (top, bottom padding + 1px border on each side.) */}
      <Card variant="outlined" sx={{ height: 'calc(100vh - 42px)', maxHeight: "100%", overflowY: 'scroll'}}>
        <CardContent>
          <Typography gutterBottom fontSize={24}>
            {data.subject}
          </Typography>
          <Box gap={1} display="flex">
            From:
            <Typography variant="body" component="code" fontSize={16}>
              {data.from}
            </Typography>
          </Box>
          <Box gap={1} display="flex">
            To:
            <Typography variant="body" component="code" fontSize={16}>
              {data.to}
            </Typography>
          </Box>
          {data.cc ? (
            <Box gap={1} display="flex">
              CC:
              <Typography variant="body" component="code" fontSize={16}>
                {data.cc}
              </Typography>
            </Box>
          ) : null}
          {data.bcc ? (
            <Box gap={1} display="flex">
              BCC:
              <Typography variant="body" component="code" fontSize={16}>
                {data.bcc}
              </Typography>
            </Box>
          ) : null}
          <Typography variant="body2" marginTop={6}>
            {data.body}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default function EmailsPage({ id, fallback }) {
  const router = useRouter()

  return (
    <SWRConfig value={{ fallback }}>
      <Box display="flex">
        <Emails />
        <EmailDetails id={id || router.query.id} />
      </Box>
    </SWRConfig>
  )
}
