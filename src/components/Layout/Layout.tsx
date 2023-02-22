import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

type Props = {
  children: ReactNode
  title?: string
}

const siteTitle = 'SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル'
const siteDescription =
  '「スマートバイオ産業・農業基盤技術」の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。'

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>
          {props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        </title>
        <meta name="description" content={siteDescription} key="desc" />
        <meta
          property="og:title"
          content={props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content="https://sip-db.dbcls.jp/ogp.png" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
