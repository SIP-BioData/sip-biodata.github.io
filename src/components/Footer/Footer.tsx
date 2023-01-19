import {css} from "@emotion/react";
import Image from 'next/image'
import Link from 'next/link'

import logoPic from '../../../public/logo.png'

const footerStyle = css`
  background: var(--col-bk);
  color: var(--col-wh);
  padding: 40px 0;
`
const footerLogoStyle = css`
  max-width: var(--inner1000);
  margin: 0 auto;
  display: flex;
  align-items: center;
  h1 {
    font-size: 
    margin-left: 22px;
  }
`

const menuStyle = css`
  max-width: var(--inner1000);
  margin: 56px auto 0;
  display: flex;
  li {
    margin-right: 36px
  }
`

const Footer = () => {
  return (
    <>
      <footer css={footerStyle}>
        <div css={footerLogoStyle}>
          <Image src={logoPic} alt="SIP"/>
          <h1>SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル</h1>
        </div>
        <ul css={menuStyle}>
          <li>
            <Link href="/data">データリスト</Link>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              SIP BioDB Search
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
