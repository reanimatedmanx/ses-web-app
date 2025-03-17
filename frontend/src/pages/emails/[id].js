import { useRouter } from 'next/router'
import { SWRConfig, unstable_serialize } from 'swr'
import Box from '@mui/material/Box'
import { getEmailsCacheKey, getEmails } from '@/api/emailList'
import { getEmailCacheKey, getEmailDetailsById } from '@/api/emailDetails'
import { EmailsView } from '@/views/EmailsView'
import { EmailDetailsView } from '@/views/EmailDetailsView'

export async function getServerSideProps({ query }) {
	const emailQueryParams = {
		page: 1,
		pageSize: 100,
	}

	const emailsKey = unstable_serialize(getEmailsCacheKey(emailQueryParams))
	const emailKey = unstable_serialize(getEmailCacheKey(query.id))

	const [emails, selectedEmail] = await Promise.all([
		getEmails(emailQueryParams),
		getEmailDetailsById(query.id),
	])

	return {
		props: {
			id: query.id,
			fallback: {
				[emailsKey]: emails,
				[emailKey]: selectedEmail,
			},
		},
	}
}

export default function EmailsPage({ id, fallback }) {
	const router = useRouter()

	return (
		<SWRConfig value={{ fallback }}>
			<Box display="flex">
				<EmailsView />
				<EmailDetailsView id={id || router.query.id} />
			</Box>
		</SWRConfig>
	)
}
