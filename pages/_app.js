import '../styles/globals.css'
import Header from "../components/Header"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system" // default "light"
    >
      <div className="container mx-auto">
        <Component {...pageProps} />
        <footer className="text-center prose max-w-none">
          Made with 🤍 by <b>Azis</b>. Inspired by <a href="https://brittanychiang.com/"><b>brittanychiang</b></a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
