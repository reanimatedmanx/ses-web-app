import { SWRConfig, unstable_serialize } from 'swr'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container } from '@/components'
import { getEmailsCacheKey, getEmails } from '@/api/emailList'
import { EmailsView } from '@/views/EmailsView'
import { SendEmailView } from '@/views/SendEmailView'

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

export default function EmailsPage({ fallback }) {
  return (
    <SWRConfig fallback={{ fallback }}>
      <Box display="flex">
        <EmailsView />
        <Container>
          <Box display="flex" width="100%" height="100%" justifyContent="center" alignItems="center">
            <Typography>No email selected</Typography>
          </Box>
        </Container>
       <SendEmailView/>
      </Box>
    </SWRConfig>
  )
}
