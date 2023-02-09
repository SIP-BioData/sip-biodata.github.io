import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../../public/logo.png'

const headerStyle = css`
  position: relative;
`

const logoStyle = css`
  width: 120px;
  background-color: var(--col-wh);
  padding: 42px 22px;
  border-radius: 0 0 10px 0;
  box-shadow: var(--shadow);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`

const naviStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--inn1000);
  background-color: var(--col-wh);
  padding: 22px 36px;
  border-radius: 3em;
  box-shadow: var(--shadow);
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  h1 {
    font-size: 18px;
  }
`

const menuStyle = css`
  display: flex;
  li {
    margin-left: 40px;
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

const Header = () => {
  return (
    <header css={headerStyle}>
      <div css={logoStyle}>
        <Image src={logoImg} alt="SIP" />
      </div>
      <nav css={naviStyle}>
        <h1>
          <Link href="/">
            SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル
          </Link>
        </h1>
        <ul css={menuStyle}>
          <li>
            <Link href="/data">データリスト</Link>
          </li>
          <li>
            <a
              css={linkStyle}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>SIP BioDB Search </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  className="st0"
                  d="M9.8,0v1.8H13l-8.7,8.7l1.3,1.3L14.2,3v3.2H16V0 M14.2,14.2H1.8V1.8H8V0H1.8C0.8,0,0,0.8,0,1.8c0,0,0,0,0,0
v12.4c0,1,0.8,1.8,1.8,1.8h12.4c1,0,1.8-0.8,1.8-1.8V8h-1.8V14.2z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
