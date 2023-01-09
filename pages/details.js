import { Container, Grid, Stack } from '@mui/material'
import Aos from 'aos'
import Image from 'next/image'
import React, { useEffect } from 'react'
import sideimage from '../images/first_image.jpg'
import imagesecond from '../images/second_image.jpg'
import imagethird from '../images/third_image.jpg'
import styles from '../styles/navbarCss.module.css'
import { detailsData, detailSecondData, detailThirdData } from '../utils/servicesArray'


const DetailsScreen = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    return (

        <>
            {/* ================    First Details Screen ======================  */}

            <Stack mb={10} >
                <Container>



                    <Grid container spacing={3} alignItems='center'  >
                        <Grid item sm={6} md={6} xs={12}>
                            <Stack>
                                <Stack className={styles.detailsHeading} >Web Application Development</Stack>
                                <Stack className={styles.detailssubheading} >This is the age of modern web designs, frameworks and tools. We utilize all of the latest tech to ensure our clients can give their customers the best web experience which ensures a high rate of conversion.</Stack>
                            </Stack>

                            <Grid container spacing={3} mt={2}   >
                                {detailsData.map((e, i) => {
                                    return (
                                        <Grid sx={{border:"1px solid red"}}  
                                        
                                        className={styles.DetailsBox} 
                                        item sm={6} md={6} xs={12} lg={6}>
                                            <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">

                                                {e.name}
                                            </div>

                                        </Grid>


                                    )
                                })}
                            </Grid>

                        </Grid>
                        <Grid item sm={6} md={6} xs={12}   >
                            <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">

                                <Image
                                    src={sideimage}
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


                    </Grid>

                </Container>

            </Stack >
            {/* ================    First Details Screen ======================  */}

            {/* ================    second Details Screen ======================  */}
            <Stack mt={10} >
                <Container  >



                    <Grid container spacing={3} alignItems='center'  >
                        <Grid item sm={6} md={6} xs={12}   >
                            <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">


                                <Image
                                    src={imagesecond}
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
                                <Stack className={styles.detailsHeading} >Mobile App Development</Stack>
                                <Stack className={styles.detailssubheading} >Mobile development isn't cheap, but we utilize technologies such as React Native and Flutter to provide the cleanest and fastest applications to our clients within their targeted budgets.</Stack>
                            </Stack>

                            <Grid container alignItems='center' spacing={3} mt={2}   >
                                {detailSecondData.map((e, i) => {
                                    return (
                                        <Grid className={styles.DetailsBox} item sm={6} md={6} xs={12} lg={6}>
                                            <div data-aos-duration='1000' data-aos="fade-up" data-aos-easing="linear">


                                                {e.name}
                                            </div>

                                        </Grid>


                                    )
                                })}
                            </Grid>

                        </Grid>



                    </Grid>

                </Container>
            </Stack>

            {/* ================    second Details Screen ======================  */}
            {/* ================    Third Details Screen ======================  */}
            <Stack mt={10} >
                <Container>



                    <Grid container spacing={3} alignItems='center'  >
                        <Grid item sm={6} md={6} xs={12}>
                            <Stack>
                                <Stack className={styles.detailsHeading} >Cloud Solutions</Stack>
                                <Stack className={styles.detailssubheading} >Our team of experts take you through the process of utilizing the most out of Cloud services such as AWS, Google Cloud and IBM to create the perfect infrastructure for you while ensuring that your costs are manageable and apps are scalable.</Stack>
                            </Stack>

                            <Grid container alignItems='center' spacing={3} mt={2}   >
                                {detailThirdData.map((e, i) => {
                                    return (
                                        <Grid className={styles.DetailsBox} item sm={6} md={6} xs={12} lg={6}>
                                            <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">

                                                {e.name}
                                            </div>

                                        </Grid>


                                    )
                                })}
                            </Grid>

                        </Grid>
                        <Grid item sm={6} md={6} xs={12}   >
                            <div data-aos-duration='1000' data-aos="fade-down" data-aos-easing="linear">

                                <Image
                                    src={imagethird}
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


                    </Grid>

                </Container>

            </Stack >

            {/* ================    Third Details Screen ======================  */}



        </>

    )
}

export default DetailsScreen