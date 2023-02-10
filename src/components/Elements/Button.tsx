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
  margin: 0 15px;
  display: inline-block;
  width: 240px;
  line-height: 48px;
  appearance: none;
  border: 0;
  border-radius: 40px;
  background: var(--col-bk);
  a {
    color: #fff;
  }
`

const innerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  span {
    &:first-of-type {
      margin-right: 10px;
    }
    &:last-of-type {
      margin-left: 10px;
    }
  }
`

const Button = ({ iconLeft, slug, text, iconRight }: Props) => {
  return (
    <button css={style}>
      <Link css={innerStyle} href={slug}>
        <span>{iconLeft}</span>
        <span>{text}</span>
        <span>{iconRight}</span>
      </Link>
    </button>
  )
}

export default Button
