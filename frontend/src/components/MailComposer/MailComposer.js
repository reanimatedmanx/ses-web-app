

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import styles from './MailComposer.module.css'

export function MailComposer({ isOpened, onClose }) {
    return (
        <Drawer
            PaperProps={{
                className: styles.paper,
                elevation: 2
            }}
            slotProps={{
                root: styles.root,
            }}
            anchor='right'
            open={isOpened}
            onClose={onClose}
        >
            {/* TODO */}
        </Drawer>
    );
}
