import { Container } from '@/components/'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEmailDetails } from '@/api/emailDetails'

export function EmailDetailsView({ id }) {
  const { error, data } = useEmailDetails(id)

  if (error) return <div>Failed to load</div>

  return (
    <Container>
      {/* TODO: Beautify this calc, extract to a separate component, extract `42` magic number to const (top, bottom padding + 1px border on each side.) */}
      <Card variant="outlined" sx={{ height: 'calc(100vh - 42px)', maxHeight: "100%", overflowY: 'scroll' }}>
        <CardContent>
          <Typography gutterBottom fontSize={24}>
            {data.subject}
          </Typography>
          <Box gap={1} display="flex">
            From:
            <Typography variant="body" component="code" fontSize={16}>
              {data.from}
            </Typography>
          </Box>
          <Box gap={1} display="flex">
            To:
            <Typography variant="body" component="code" fontSize={16}>
              {data.to}
            </Typography>
          </Box>
          {data.cc ? (
            <Box gap={1} display="flex">
              CC:
              <Typography variant="body" component="code" fontSize={16}>
                {data.cc}
              </Typography>
            </Box>
          ) : null}
          {data.bcc ? (
            <Box gap={1} display="flex">
              BCC:
              <Typography variant="body" component="code" fontSize={16}>
                {data.bcc}
              </Typography>
            </Box>
          ) : null}
          <Typography variant="body2" marginTop={6}>
            {data.body}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
