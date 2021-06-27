import '../styles/globals.css'
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return <div className="container mx-auto">
    <Component {...pageProps} />
    <footer className="text-gray-300 text-center">
      Made with 🤍 by <b>Azis</b>. Inspired by <a href="https://brittanychiang.com/"><b>brittanychiang</b></a>
    </footer>
  </div>
}

export default MyApp
