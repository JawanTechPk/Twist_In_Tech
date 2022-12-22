import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AdbIcon from '@mui/icons-material/Adb';
import logoImg from '../images/logo.png'
import Image from 'next/image';
import styles from '../styles/custom.module.css'
import HomeScreen from '../pages/home';
import { Stack } from '@mui/material';
import Card from './Form';
import AboutScreen from '../pages/about';
import ServicesScreen from '../pages/services';
import DetailsScreen from '../pages/details';
import OurProject from '../pages/ourProject';
import ContactScreen from '../pages/contact';


// import '../styles/globals.css'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Image
                    src={logoImg}
                    quality={100}
                    style={{
                        objectFit: 'cover',
                        width: '100px',
                        height: '100px',
                    }}
                />
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>

                        <ListItemText  ><Link href='#homeRoute'  >Home</Link></ListItemText>
                        <ListItemText  ><Link href='#servicesRoute'  >Services</Link></ListItemText>
                        <ListItemText  ><Link href='#detailsRoute'  >Details</Link></ListItemText>
                        <ListItemText><Link href='#projectRoute'  >Our Project</Link></ListItemText>
                        <ListItemText><Link href='#aboutRoute' >About Us</Link></ListItemText>
                        <ListItemText><Link href='#contactRoute' >Contact Us</Link></ListItemText>

                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box >
            <CssBaseline />
            <AppBar component="nav" className={styles.AppBarStyle}     >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Image
                            src={logoImg}
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                width: '150px',
                                height: '100px',
                                // marginTop:'30px'
                            }}
                        />

                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        <Button sx={{ color: '#fff' }}><Link href='#homeRoute' className={styles.btnhover} >Home</Link></Button>
                        <Button sx={{ color: '#fff' }}><Link href='#servicesRoute' className={styles.btnhover} >Services</Link></Button>
                        <Button sx={{ color: '#fff' }}><Link href='#detailsRoute' className={styles.btnhover}  >Details</Link></Button>
                        <Button sx={{ color: '#fff' }}><Link href='#projectRoute' className={styles.btnhover}  >Our Project</Link></Button>
                        <Button sx={{ color: '#fff' }}><Link href='#aboutRoute' className={styles.btnhover}  >About Us</Link></Button>
                        <Button sx={{ color: '#fff' }}><Link href='#contactRoute' className={styles.btnhover}  >Contact Us</Link></Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />


                </Box>
            </Box>
            <Box  id='homeRoute'component="main" sx={{ p: 3 }}>
                <Toolbar  />

            </Box>
            
            <Stack >
                <Stack mb={5} alignItems='center' >
                    <HomeScreen  />

                </Stack>

                <Stack mb={5}  id='servicesRoute' alignItems='center' >
                    <ServicesScreen  />
                </Stack>

                <Stack mb={5} id='detailsRoute'  alignItems='center' >
                    <DetailsScreen />
                </Stack>
                <Stack mb={5} mt={10} id='projectRoute'  alignItems='center' >
                    <OurProject />
                </Stack>
                <Stack mb={5} mt={10} id='aboutRoute'  alignItems='center' >
                    <AboutScreen />
                </Stack>
                <Stack mb={5} mt={10} id='contactRoute'  alignItems='center' >
                    <ContactScreen />
                </Stack>

            </Stack>


        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;