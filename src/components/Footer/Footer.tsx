import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../../public/logo.png'

const footerStyle = css`
  background: var(--col-bk);
  color: var(--col-wh);
  padding: 40px 20px;
`
const footerLogoStyle = css`
  max-width: var(--inn1000);
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 680px) {
    align-items: flex-start;
  }
`

const logoStyle = css`
  flex: 0 1 auto;
`

const titleStyle = css`
  font-size: 18px;
  margin-left: 22px;
`

const menuStyle = css`
  max-width: var(--inn1000);
  margin: 48px auto 0;
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 0 36px 16px 0;
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
        <div css={logoStyle}>
          <Image src={logoImg} alt="SIP" />
        </div>
        <div css={titleStyle}>
          SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル
        </div>
      </div>
      <ul css={menuStyle}>
        <li>
          <Link href="/data">データリスト</Link>
        </li>
        <li>
          <Link href="/group">研究グループ一覧</Link>
        </li>
        <li>
          <a
            css={linkStyle}
            href="https://sip-db.dbcls.jp/rhea/#/"
            target="_blank"
            rel="noreferrer"
          >
            SIP BioDB Search
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
