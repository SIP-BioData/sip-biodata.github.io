import { css } from '@emotion/react'
import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

type Props = {
  children: ReactNode
  title?: string
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
`

const mainStyle = css`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
`

const footerStyle = css`
  margin-top: auto;
`

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
      <div css={containerStyle}>
        <Header />
        <main css={mainStyle}>{children}</main>
        <div css={footerStyle}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
