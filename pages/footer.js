import { Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import styles from '../styles/custom.module.css'
import Aos from 'aos'

const FooterScreen = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (

        // <div data-aos-duration='1000' data-aos="fade-up" data-aos-easing="linear">

        // </div>
        <>
            <Grid data-aos-duration='1000' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  mt={2} container spacing={8} textAlign='center' p={5} pt={0} alignItems='center' bgcolor="#f89500" color={"black"} >
                <Grid item sm={6} md={4} xs={12}>
                    <Stack>

                        <Typography variant='h5' textAlign={"start"} fontWeight={"bold"} display={"inline"}  ><span style={{borderBottom:"3px solid black"}}> Company </span></Typography>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >About Us</Link>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >Our Services</Link>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >Privacy Policy</Link>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >Affiliate ProgramLink</Link>

                    </Stack>
                </Grid>
                <Grid item sm={6} md={4} xs={12}>
                    <Stack>

                        <Typography variant='h5' textAlign={"start"} fontWeight={"bold"} display={"inline"}  ><span style={{borderBottom:"3px solid black"}}> Get Help </span></Typography>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >FAQ</Link>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >Shipping</Link>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >Returns</Link>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >Order Status</Link>
                        <Link href='#' className={styles.hoveringEffect}  style={{textAlign:"left"}} >Payment Options</Link>

                    </Stack>
                </Grid>
                <Grid item sm={6} md={4} xs={12}>
                    <Stack alignItems={"start"} justifyContent={"start"}>

                        <Typography variant='h5' textAlign={"start"} fontWeight={"bold"} display={"inline"}  ><span style={{borderBottom:"3px solid black"}}> Follow Us </span></Typography>
                      <Stack mb={10} mt={2} flexDirection={"row"} justifyContent={"center"}>
                         <Typography ml={2} ><Link href="#" className={styles.hoveringIcon} ><BsFacebook size={20} /></Link></Typography>
                        <Typography ml={2} ><Link href="#" className={styles.hoveringIcon} ><BsTwitter size={20} /></Link></Typography>
                        <Typography ml={2} ><Link href="#" className={styles.hoveringIcon} ><BsInstagram size={20} /></Link></Typography>
                        <Typography ml={2} ><Link href="#" className={styles.hoveringIcon} ><BsLinkedin size={20} /></Link></Typography>
                        </Stack> 
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default FooterScreen