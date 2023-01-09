import { Grid, Stack } from '@mui/material';
import { Container } from '@mui/system';
import Aos from 'aos';
import React, { useEffect } from 'react'
import styles from '../styles/navbarCss.module.css'
import { projectData } from '../utils/servicesArray';


const OurProject = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <Stack>
            <Stack>
                <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">


                    <Stack className={styles.projectHeading} >Our customers keep coming back</Stack>
                <Stack className={styles.projectSubHeading} >We strive to be the best in the business, and that means providing premium services for every single project.</Stack>
                </div>
            </Stack>

            <Container>
                <Grid mt={2} container spacing={8} textAlign='center' alignItems='center'  >


                    {projectData.map((e, i) => {
                        return (<>

                            <Grid item sm={6} md={4} xs={12}>
                                <div data-aos-duration='1000' data-aos="fade-up" data-aos-easing="linear">


                                    <Stack className={styles.ProjectBox}   >
                                        <Stack mt={2} alignItems='center'  >
                                            <Stack>{e.icon}</Stack>
                                            <Stack fontWeight='bold' fontSize={20} color='white' mt={1} >{e.number}</Stack>
                                            <Stack fontWeight='bold' fontSize={20} color='white' mt={1} >{e.title}</Stack>
                                        </Stack>
                                    </Stack>
                                </div>

                            </Grid>
                        </>
                        )
                    })}
                </Grid>
            </Container>
        </Stack >
    )
}

export default OurProject