import { css } from '@emotion/react'
import Link from 'next/link'

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
      <header>header</header>
      <ul css={navigationStyle}>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/data">データ一覧</Link>
        </li>
        <li>
          <Link href="/group">研究グループ一覧</Link>
        </li>
      </ul>
    </>
  )
}

export default Header
