import "/styles/globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return <>
    <ClerkProvider>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  </>
}
