import { useDebouncedSearch } from '@/hooks/useDebouncedSearch';
import TextField from '@mui/material/TextField';
import styles from './MailSearch.module.css'

export function MailSearch({ query, setQuery }) {
  const handleChange = useDebouncedSearch((e) => {
    setQuery(e.target.value)
  });

  return (
    <TextField
      className={styles.root}
      variant="filled"
      label="Search inbox"
      type="search"
      fullWidth
      value={query}
      onChange={handleChange}
    />
  );
}
