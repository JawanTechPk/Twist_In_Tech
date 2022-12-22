import Navbar from '../component/Navbar'
import styles from '../styles/custom.module.css'
import HomeScreen from './home'

const MainScreen = () => {
    return (
        <>
            <div className={styles.backImg} >
                <Navbar />
            </div>
        </>
    )
}

export default MainScreen