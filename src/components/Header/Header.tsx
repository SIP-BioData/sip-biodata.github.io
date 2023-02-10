import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import logoImg from '../../../public/logo.png'
import {ReactNode} from 'react'

const headerStyle = css`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: 120px auto 120px;
  column-gap: 16px;
  align-items: start;
`

const logoStyle = css`
  width: 120px;
  background-color: var(--col-wh);
  padding: 42px 22px;
  border-radius: 0 0 10px 0;
  box-shadow: var(--shadow);
`

const naviStyle = css`
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: var(--inn1000);
  background-color: var(--col-wh);
  padding: 22px 36px;
  border-radius: 3em;
  box-shadow: var(--shadow);
`

const titleStyle = css`
  font-size: 18px;
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

type HeadingProps = {
  path: string
  children: ReactNode
}

const HeadingTitle = (props: HeadingProps) => {
  const Tag = props.path === '/' ? 'h1' : 'div'
  return (
    <Tag css={titleStyle}>
      {props.children}
    </Tag>
  )
}

const Header = () => {
  const router = useRouter()
  return (
    <header css={headerStyle}>
      <div css={logoStyle}>
        <Image src={logoImg} alt="SIP" />
      </div>
      <nav css={naviStyle}>
        <HeadingTitle path={router.asPath}>
          <Link href="/">
            SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル
          </Link>
        </HeadingTitle>
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
