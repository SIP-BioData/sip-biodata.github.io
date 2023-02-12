import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import logoImg from '../../../public/logo.png'

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
  font-weight: 400;
`

const menuStyle = css`
  display: flex;
  li {
    margin-left: 40px;
  }
`

const linkStyle = css`
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: var(--col-bk);
    mask: var(--link-icon-url) no-repeat;
    margin-left: 10px;
  }
`

type HeadingProps = {
  path: string
  children: ReactNode
}

const HeadingTitle = (props: HeadingProps) => {
  const Tag = props.path === '/' ? 'h1' : 'div'
  return <Tag css={titleStyle}>{props.children}</Tag>
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
            <a css={linkStyle} href="#" target="_blank" rel="noreferrer">
              SIP BioDB Search
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
