import * as React from 'react';
import { List } from '@mui/material';
import { MailListItem } from './MailListItem';
import styles from './MailList.module.css'

export function MailList({ inboxItems }) {
  return (
    <List className={styles.root}>
      {inboxItems?.map(mail => (
        <MailListItem key={mail.id} mail={mail}/>
      ))}
    </List>
  );
}
