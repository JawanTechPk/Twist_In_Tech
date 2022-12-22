import { Container, Grid, Stack } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Card from '../component/Card'
import styles from '../styles/custom.module.css'
import { servicesData } from '../utils/servicesArray'


const ServicesScreen = (props) => {
  const { ids } = props
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Stack id={ids} >
      <Stack mb={5} >
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" >

          <Stack className={styles.servicesHeading} >Our Services</Stack>
        </div>
        <Stack className={styles.servicesSubHeading} >We deal with the state-of-the-art tools and technologies, to provide you the best services.</Stack>
      </Stack>

      <Container

      >

        <Grid container spacing={3}  >

          {servicesData.map((e, i) => {
            return (
              <Grid item sm={6} md={4} xs={12}   >
                <div data-aos-duration='1000' data-aos="zoom-in">
                  <Card
                    icons={e.icon}
                    textFirst={e.title}
                    textSecond={e.subtitle}
                  />
                </div>
              </Grid>

            )
          })}
        </Grid>

      </Container>


    </Stack>
  )
}

export default ServicesScreen