import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import logoImg from '../../../public/logo.png'

const mq = {
  mini: '@media (max-width: 600px)',
  thin: '@media (max-width: 1100px)',
  wide: '@media (min-width: 1101px)',
}

const logoSize = {
  min: '80px',
  max: '120px',
}

const headerStyle = css`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns:
    minmax(${logoSize.min}, 9vw) minmax(var(--inn1000), auto)
    minmax(${logoSize.min}, 9vw);
  column-gap: 16px;
  align-items: start;
  ${mq.thin} {
    grid-template-columns: minmax(${logoSize.min}, 9vw) auto;
    padding-right: 20px;
  }
`

const logoStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${logoSize.max};
  aspect-ratio: 1;
  background-color: var(--col-wh);
  padding: 12px;
  border-radius: 0 0 10px 0;
  box-shadow: var(--shadow);
`

const bgStyle = css`
  background-color: var(--col-wh);
  border-radius: 3em;
  box-shadow: var(--shadow);
`

const naviStyle = css`
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
  max-width: var(--inn1000);
  ${mq.wide} {
    ${bgStyle};
    justify-content: space-between;
    gap: 32px;
    padding: 20px 36px;
    margin: 0;
  }
`

const titleStyle = css`
  display: flex;
  font-size: 18px;
  font-weight: 400;
  a {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  ${mq.thin} {
    ${bgStyle};
    font-size: 16px;
    flex: 0 1 auto;
    justify-content: center;
    flex-wrap: wrap;
    padding: 12px 24px;
  }
  ${mq.mini} {
    font-size: 14px;
  }
`

const titleChildStyle = css`
  flex: 0 1 auto;
`

const menuStyle = css`
  display: flex;
  gap: 24px;
  ${mq.thin} {
    ${bgStyle};
    flex: 0 1 auto;
    justify-content: center;
    flex-wrap: wrap;
    padding: 12px 24px;
  }
  ${mq.mini} {
    gap: 12px;
    font-size: 14px;
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
  return (
    <Tag css={titleStyle}>
      {props.path === '/' ? (
        props.children
      ) : (
        <Link href="/">{props.children}</Link>
      )}
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
          <span css={titleChildStyle}>
            SIP「スマートバイオ産業・農業基盤技術」
          </span>
          <span css={titleChildStyle}>データ連携ポータル</span>
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
