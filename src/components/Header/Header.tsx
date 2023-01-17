import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

import logoPic from '../../../public/logo.png'

const navigationStyle = css`
  display: flex;
  list-style: none;
  li {
    margin-right: 12px;
  }
`

const Header = () => {
  return (
    <>
      <header>
        <Image src={logoPic} alt="SIP" />
        <ul css={navigationStyle}>
          <li>
            <Link href="/">
              SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル
            </Link>
          </li>
          <li>
            <Link href="/data">データリスト</Link>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              SIP BioDB Search
            </a>
          </li>
          <li>
            <Link href="/group">研究グループ一覧</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
