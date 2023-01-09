import Navbar from '../component/Navbar'
import styles from '../styles/custom.module.css'
import HomeScreen from './home'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainScreen = () => {
    return (
        <>
            <div className={styles.backImg} >
                <Navbar />
<ToastContainer position="top-center" />
            </div>
        </>
    )
}

export default MainScreen