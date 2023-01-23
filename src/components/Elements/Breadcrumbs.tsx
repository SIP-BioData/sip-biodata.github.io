import { css } from '@emotion/react'
import Link from 'next/link'

type Props = {
  title?: string
}

const breadcrumbsStyle = css`
  margin: 20px 0 0;
  display: flex;
  Link {
    &:last-child {
      color: #646464;
    }
    &:not(:first-of-type) {
      content: '>';
      margin: 0 8px;
    }
  }
`

const Breadcrumbs = ({ title }: Props) => {
  return (
    <nav css={breadcrumbsStyle}>
      <Link href="/">HOME</Link>
      <Link href="">{title}</Link>
    </nav>
  )
}

export default Breadcrumbs
