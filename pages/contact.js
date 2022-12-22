import { Container, Stack } from '@mui/material'
import Aos from 'aos'
import React, { useEffect } from 'react'
import ContactUs from '../component/Form'
import styles from '../styles/custom.module.css'

const ContactScreen = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <Container>
      <Stack>
        <div data-aos-duration='1000' data-aos="fade-up" data-aos-easing="linear">
          <Stack className={styles.servicesHeading} >Contact Us</Stack>
        </div>

      </Stack>
      <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">
        <ContactUs />
      </div>
    </Container>
  )
}

export default ContactScreen