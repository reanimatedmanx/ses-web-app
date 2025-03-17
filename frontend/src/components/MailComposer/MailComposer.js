import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Textarea from '@mui/material/TextareaAutosize'
import styles from './MailComposer.module.css'

/**
 * TODO: Unfinished as of 3/17/2025
 */
export function MailComposer({ isOpened, onClose }) {
	return (
		<Drawer
			PaperProps={{
				className: styles.paper,
				elevation: 2,
			}}
			slotProps={{
				root: styles.root,
			}}
			anchor="right"
			open={isOpened}
			onClose={onClose}
		>
			<Box component="form" sx={{ p: 2 }}>
				<Paper sx={{ p: 2 }}>
					<TextField
						id="email-to"
						name="email-to"
						type="email"
						label="Email Address"
						variant="standard"
						required
						autoFocus
						fullWidth
						margin="dense"
					/>
					<TextField
						id="email-cc"
						name="email-cc"
						type="email"
						label="Email CC Addresses"
						variant="standard"
						fullWidth
						margin="dense"
					/>
					<TextField
						id="email-bcc"
						name="email-bcc"
						type="email"
						label="Email BCC Addresses"
						variant="standard"
						fullWidth
						margin="dense"
					/>
					<TextField
						id="email-subject"
						name="email-subject"
						type="text"
						label="Email Subject"
						variant="standard"
						fullWidth
						margin="dense"
					/>
					<TextField
						id="email-body"
						name="email-body"
						type="text"
						label="Email Body"
						variant="standard"
						minRows={10}
						maxRows={14}
						multiline
						fullWidth
						margin="dense"
					/>
				</Paper>
			</Box>
			<Box sx={{ p: 2 }} gap={2} display="flex">
				<Button type="submit" variant='contained'>Send</Button>
				<Button onClick={() => { }}>Cancel</Button>
			</Box>
		</Drawer>
	)
}
