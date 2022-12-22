import Layout from '../component/Layout'
// import'materialize-css/dist/css/materialize.min.css'
import '../styles/globals.css'
import MainScreen from './mainScreen'


function MyApp({ Component, pageProps }) {
  return <MainScreen>
    <Component {...pageProps} />
  </MainScreen>
}

export default MyApp
