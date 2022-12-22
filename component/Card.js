import React from 'react'
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import styles from '../styles/custom.module.css'


const Card = (props) => {

    const { textFirst, textSecond, icons } = props
    return (
        <>
            <Stack alignItems='center' >
                <Box className={styles.Cardd}  >
                    <Stack p={1} >
                        <Stack >
                            <Typography className={styles.cardHeadings} variant="h5">{icons} </Typography>
                        </Stack>
                        <Stack >
                            <Typography className={styles.cardHeadings} variant="h5">{textFirst} </Typography>
                        </Stack>
                        <Stack pt={2} sx={{ textAlign: 'center' }}   >
                            <Typography className={styles.cardHeadings} variant="p">{textSecond} </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </>

    )
}
export default Card