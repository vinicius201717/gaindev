import { GlobalStyles } from '@/styles/globalStyles'
import { AppProps } from 'next/app'

GlobalStyles()
export default function Site({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
