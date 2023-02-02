import { css } from '@emotion/react'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  iconLeft?: ReactNode
  slug: string
  text: string
  iconRight?: ReactNode
}

const style = css`
  display: block;
  width: 240px;
  line-height: 48px;
  margin: 50px 0 0;
  appearance: none;
  border: 0;
  border-radius: 24px;
  background: var(--col-bk);
  a {
    color: #fff;
  }
`
const HomeItem = ({ iconLeft, slug, text, iconRight }: Props) => {
  return (
    <button css={style}>
      <Link href={slug}>
        <>{iconLeft}</>
        <span>{text}</span>
        <>{iconRight}</>
      </Link>
    </button>
  )
}

export default HomeItem
