import '@/styles/globals.scss'
import 'tailwindcss/tailwind.css'
import {Layout} from "@/Components";
export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
