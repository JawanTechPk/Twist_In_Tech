import { Container, Grid, Stack } from '@mui/material'
import React from 'react'
import styles from '../styles/custom.module.css'
import sirImage from '../images/sir_image.jpeg'
// import { Container } from '@mui/system'
import Image from 'next/image'
import { detailsData } from '../utils/servicesArray'


const AboutScreen = () => {
  return (
    <>
      <Stack mb={10} >
        <Stack mb={5} className={styles.servicesHeading} >About Us</Stack>
        <Container>




          <Grid container spacing={3} alignItems='center'  >

            <Grid item sm={6} md={6} xs={12}   >
              <div data-aos-duration='1000' data-aos="flip-left" data-aos-easing="linear">

                <Image
                  src={sirImage}
                  quality={100}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto',
                    // minHeight:'500px'
                  }}
                />
              </div>
            </Grid>
            <Grid item sm={6} md={6} xs={12}>
              <Stack>
                <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">

                  <Stack className={styles.detailsHeading} >CEO Muhamamd Ali Mughal Message :</Stack>
                  <Stack className={styles.detailssubheading} >We aim to be the most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry</Stack>
                </div>
              </Stack>



            </Grid>



          </Grid>

        </Container>

      </Stack >
    </>
  )
}

export default AboutScreen