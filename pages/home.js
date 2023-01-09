import styles from '../styles/navbarCss.module.css'
import { Button, Stack, Typography } from '@mui/material'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import Aos from 'aos'
import { useEffect } from 'react'
import Link from 'next/link'

const HomeScreen = (props) => {
  const { id,contact,project } = props
  useEffect(() => {
    Aos.init();
}, [])
  return (

    <>
      <Stack width='100%' >
        <Stack alignItems='center' >


          <Stack width='100%' maxWidth={900}  >
            <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">
              <h1 className={styles.heading} >Welcome to Twist In Tech</h1>
            </div>
          </Stack>

          <Stack mb={5} width='100%' maxWidth={600}>

            <Stack justifyContent='center'     >
              <Stack padding={1.6} className={styles.subBorder} >
                <Typography color='white' padding={1} variant='p' >
                  Our fast-paced software development methodologies and techniques are used to put your idea through an epic process,
                  as we shape your thoughts into reality through the power of technology.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack my={2} >
          <Stack direction='row' justifyContent='space-around' >
            <Button  sx={{border: '1px solid white',color: 'white',borderRadius: '10px',fontSize: '1.7em',padding: '10px'}} className={styles.btnSection} ><Link href={'#contactRoute'}>Contact</Link></Button>
            <Button  sx={{border: '1px solid white',color: 'white',borderRadius: '10px',fontSize: '1.7em',padding: '10px'}} className={styles.btnSection} ><Link href={'#projectRoute'}>Project</Link></Button>
          </Stack>
        </Stack>

        <Stack alignItems='center' my={5} >
          <Stack direction='row' spacing={5}  >
            <BsFacebook color='#f89500' size={35} />
            <BsTwitter color='#f89500' size={35} />
            <BsInstagram color='#f89500' size={35} />

          </Stack>
        </Stack>

      </Stack>
    </>
  )
}

export default HomeScreen