import Layout from '../component/Layout'
// import'materialize-css/dist/css/materialize.min.css'
import '../styles/globals.css'
import NoteState from './context/noteState'
import MainScreen from './mainScreen'

function MyApp({ Component, pageProps }) {
  return <NoteState>

   <MainScreen>
    
    <Component {...pageProps} />
  
  </MainScreen>

  </NoteState>
}

export default MyApp
