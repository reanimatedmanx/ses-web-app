import Link from 'next/link'
import { Tooltip, List, ListItemButton, ListItemIcon } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import SendEmailIcon from '@mui/icons-material/SendRounded'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
	return (
		<List
			className={styles.root}
			component="nav"
		>
			<ListItemButton as={Link} href="/">
				<Tooltip title="Home" placement="right-start">
					<HomeIcon className={styles.icon} />
				</Tooltip>
			</ListItemButton>
			<ListItemButton as={Link} href="/emails">
				<Tooltip title="Email Inbox" placement="right-start">
					<EmailIcon className={styles.icon} />
				</Tooltip>
			</ListItemButton>
			<ListItemButton as={Link} href="/emails/sent">
				<Tooltip title="Sent Mail" placement="right-start">
					<SendEmailIcon className={styles.icon} />
				</Tooltip>
			</ListItemButton>
			<ListItemButton as={Link} href="/leads">
				<Tooltip title="Leads" placement="right-start">
					<AccountBoxIcon className={styles.icon} />
				</Tooltip>
			</ListItemButton>
		</List>
	)
}
