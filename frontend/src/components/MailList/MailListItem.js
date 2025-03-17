import { useMemo } from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import styles from './MailListItem.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MailListItem({ mail }) {
	const router = useRouter()
	const linkUrl = useMemo(() => `/emails/${mail.id}`, [])
	const isActive = useMemo(() => mail.id == router.query.id)
	const date = useMemo(() => new Date(mail.created_at).toLocaleDateString('en-US'), [])

	return (
		<Link href={linkUrl}>
			<ListItem
				alignItems="flex-start"
				className={isActive ? [styles.root, styles.active].join(' ') : styles.root}
			>
				<ListItemAvatar>
					<Avatar alt={mail.from} />
				</ListItemAvatar>
				<Box display="flex" justifyContent="space-between" width="100%">
					<Box>
						<ListItemText
							primary={
								<Typography component="h5" fontWeight={600}>
									{mail.from_name}
								</Typography>
							}
							secondary={
								<Typography component="span" variant="body" sx={{ color: 'text.primary' }}>
									{mail.subject_preview}
								</Typography>
							}
						/>
						<ListItemText
							primary={
								<Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
									{mail.body_preview}
								</Typography>
							}
						/>
					</Box>
					<Box>
						<ListItemText
							primary={
								<Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
									{date}
								</Typography>
							}
						/>
					</Box>
				</Box>
			</ListItem>
		</Link>
	)
}
