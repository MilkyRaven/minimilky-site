import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Currently from '@/components/Currently'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Milky Studio</title>
        <meta name="description" content="A small but powerful dev team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header */}
        <Header></Header>
        <Banner></Banner>
        <About></About>
        <Currently></Currently>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  )
}
