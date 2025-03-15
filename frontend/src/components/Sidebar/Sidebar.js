import Link from 'next/link';
import { Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styles from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={styles.root}>
        <Link href="/">
          <Tooltip title="Home" placement="right-start">
            <HomeIcon className={styles.icon} />
          </Tooltip>
        </Link>
        <Link href="/emails">
          <Tooltip title="Emails" placement="right-start">
            <EmailIcon className={styles.icon} />
          </Tooltip>
        </Link>
        <Link href="/leads">
          <Tooltip title="Leads" placement="right-start">
            <AccountBoxIcon className={styles.icon} />
          </Tooltip>
        </Link>
      </div>
    )
} 