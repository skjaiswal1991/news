import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Default from '../component/layout/default'
import '../styles/style.min.css'
import '../styles/owl.carousel.min.css'
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  )

}
