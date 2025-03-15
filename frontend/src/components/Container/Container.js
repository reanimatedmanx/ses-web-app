import { Container as MUIContainer } from '@mui/material';
import styles from './Container.module.css'

export const Container = ({ children }) => {
    return (
        <MUIContainer maxWidth="xxl" className={styles.root}>
          {children}
        </MUIContainer>
    )
}
