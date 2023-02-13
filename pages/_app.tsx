import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Default from '../component/layout/default'
import '../styles/style.min.css'
import { SSRProvider } from 'react-bootstrap';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <Default>
        <Component {...pageProps} />
      </Default>
    </SSRProvider>
  )

}
