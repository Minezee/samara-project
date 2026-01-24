import ChatbotWrapper from '@/components/chatbot/ChatbotWrapper';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {/* <ChatbotWrapper /> */}
      <Footer footerData={pageProps?.data?.footer} />
    </>
  )
}
