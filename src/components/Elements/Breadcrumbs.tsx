import { css } from '@emotion/react'
import Link from 'next/link'

type Props = {
  title?: string
  childTitle?: string
}

const style = css`
  margin: 20px 0 0;
  display: flex;
  Link {
    margin-left: 12px;
    &:last-child {
      color: #646464;
    }
    &:not(:first-child) {
      ::before {
        content: '>';
        margin: 0 8px;
      }
    }
  }
`
const childStyle = css`
  &::before {
    content: '>';
    margin: 0 8px;
  }
  &:last-child {
    color: #646464;
  }
`

const Breadcrumbs = ({ title, childTitle }: Props) => {
  return (
    <nav css={style}>
      <Link href="/">HOME</Link>
      <Link css={childStyle} href="">
        {title}
      </Link>
      <Link css={childStyle} href="">
        {childTitle}
      </Link>
    </nav>
  )
}

export default Breadcrumbs
