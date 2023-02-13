import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル',
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="「スマートバイオ産業・農業基盤技術」の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
