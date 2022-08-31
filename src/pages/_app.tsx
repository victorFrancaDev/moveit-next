import type { AppProps } from 'next/app'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  ) 
}

export default MyApp
