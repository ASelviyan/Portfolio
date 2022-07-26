import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <Footer />
    </>
  )

}

export default MyApp
