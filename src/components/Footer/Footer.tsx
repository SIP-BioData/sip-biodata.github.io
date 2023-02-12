import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

import logoPic from '../../../public/logo.png'

const footerStyle = css`
  background: var(--col-bk);
  color: var(--col-wh);
  padding: 40px 0;
`
const footerLogoStyle = css`
  max-width: var(--inn1000);
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  h1 {
    font-size: 20px;
    margin-left: 22px;
  }
`

const menuStyle = css`
  max-width: var(--inn1000);
  margin: 56px auto 0;
  display: flex;
  li {
    margin-right: 36px;
  }
`

const linkStyle = css`
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: var(--col-wh);
    mask: var(--link-icon-url) no-repeat;
    margin-left: 10px;
  }
`

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div css={footerLogoStyle}>
        <Image src={logoPic} alt="SIP" />
        <h1>SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル</h1>
      </div>
      <ul css={menuStyle}>
        <li>
          <Link href="/data">データリスト</Link>
        </li>
        <li>
          <a css={linkStyle} href="#" target="_blank" rel="noreferrer">
            SIP BioDB Search
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
