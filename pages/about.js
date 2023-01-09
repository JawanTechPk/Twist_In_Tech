import { Button, Container, Grid, Stack } from '@mui/material'
import React, { useContext } from 'react'
import styles from '../styles/navbarCss.module.css'
import sirImage from '../images/sir_image.jpeg'
// import { Container } from '@mui/system'
import Image from 'next/image'
import { detailsData } from '../utils/servicesArray'
import NoteState from './context/noteState'
import NoteContext from './context/notecontext'
import { constants } from '../utils/constants'


const AboutScreen = () => {
  const apiData=useContext(NoteContext)

  const {state, update} = apiData
  console.log(apiData.state);

  return (
    <>
      <Stack mb={10} >
        <Stack mb={5} className={styles.servicesHeading} >About Us</Stack>
        <Container>

          <Button onClick={()=>update({name:'irfan',message:"succesfull"},[constants.USER_DATA
          ])}>
change
          </Button>




          <Grid container spacing={3} alignItems='center'  >

            <Grid item sm={6} md={6} xs={12}   >
              <div data-aos-duration='1000' data-aos="flip-left" data-aos-easing="linear">

                <Image
                  src={sirImage}
                  quality={100}
                  className={styles.bossImage}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto',
                    minWidth:'40px',
                    maxWidth:'400px'
                    
                    // minHeight:'500px'
                  }}
                />
              </div>
            </Grid>
            <Grid item sm={6} md={6} xs={12}>
              <Stack>
                <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">

                  <Stack className={styles.detailsHeading} > M Ali Mughal (CEO)</Stack>
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