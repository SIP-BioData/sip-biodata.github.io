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
  max-width: var(--inn1000);
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  h1 {
    font-size: 20px;
    line-heoght: 20px;
    margin-left: 22px;
  }
`

const menuStyle = css`
  max-width: var(--inn1000);
  margin: 56px auto 0;
  display: flex;
  li {
    margin-right: 36px
  }
`

const linkStyle = css`
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 8px;
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
            <a css={linkStyle} href="#" target="_blank" rel="noopener noreferrer">
              <span>SIP BioDB Search</span>
              <svg css={css`fill: #fff;`} xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 16 16">
                <path className="st0" d="M9.8,0v1.8H13l-8.7,8.7l1.3,1.3L14.2,3v3.2H16V0 M14.2,14.2H1.8V1.8H8V0H1.8C0.8,0,0,0.8,0,1.8c0,0,0,0,0,0
	v12.4c0,1,0.8,1.8,1.8,1.8h12.4c1,0,1.8-0.8,1.8-1.8V8h-1.8V14.2z"/>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
