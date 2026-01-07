import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
