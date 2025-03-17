import { useState, Fragment, useCallback } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab'
import SendEmailIcon from '@mui/icons-material/SendRounded'
import { MailComposer } from '@/components';

export function SendEmailView() {
    // TODO: Add actual virtual scrolling.
    const [state, setState] = useState({
        isOpened: false,
        formData: {
            subject: ''
        }
    });

    const toggleDrawer = useCallback((open) =>
        (event) => {
            if (
                event.type === 'keydown' &&
                event.key === 'Tab' ||
                event.key === 'Shift'
            ) {
                return;
            }

            setState({ ...state, isOpened: open });
        });


    return (
        <Fragment>
            <Box position="fixed" bottom={0} right={0} padding={4} display="flex">
                <Fab color="primary" aria-label="add" onClick={toggleDrawer(true)}>
                    <SendEmailIcon />
                </Fab>
            </Box>
            <MailComposer isOpened={state.isOpened} onClose={toggleDrawer(false)} />
        </Fragment>
    )
}
