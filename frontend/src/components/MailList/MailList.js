import { Box, List } from '@mui/material';
import { MailListItem } from './MailListItem';
import { MailSearch } from './MailSearch';
import styles from './MailList.module.css'

export function MailList({ inboxItems, query, setQuery, isLoading }) {
  return (
    <Box className={styles.root}>
      <MailSearch query={query} setQuery={setQuery} />
      <List className={styles.list}>
        {inboxItems?.map(mail => (
          <MailListItem key={mail.id} mail={mail} />
        ))}
      </List>
    </Box>
  );
}
