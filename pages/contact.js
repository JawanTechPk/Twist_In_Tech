import { Container, Stack } from '@mui/material'
import Aos from 'aos'
import React, { useEffect } from 'react'
import ContactUs from '../component/Form'
import styles from '../styles/custom.module.css'
import { IoMdContacts } from 'react-icons/io'
const ContactScreen = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <Container>
      <Stack>
        <div data-aos-duration='1000' data-aos="fade-up" data-aos-easing="linear">

          <Stack direction='row' alignItems='center' justifyContent='center'  >
            <Stack  className={styles.servicesHeading} >Contact us</Stack>
            <IoMdContacts color='#f89500' size={50} />
          </Stack>
        </div>

      </Stack>
      <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">
        <ContactUs />
      </div>
    </Container>
  )
}

export default ContactScreen