import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext';
import { GlobalStyle } from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
