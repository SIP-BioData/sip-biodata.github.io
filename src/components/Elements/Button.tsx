import { css } from '@emotion/react'
import Link from "next/link";
import { ReactNode } from 'react'

type Props = {
  slug: string
  text: string
  icon?: ReactNode
}

const style = css`
  max-width: var(--w875);
  margin: 100px auto;

  h3 {
    font-size: 38px;
    text-align: center;
  }

  p {
    margin: 76px 0 0;
    line-height: calc(38 / 20);
  }

  button {
    display: block;
    width: 240px;
    line-height: 48px;
    margin: 50px auto 0;
    appearance: none;
    border: 0;
    border-radius: 24px;
    background: var(--col-bk);
    a {
      color: #fff;
    }
  }
`
const HomeItem = ({ slug, text, icon }: Props) => {
  return (
    <>
      <button>
        <Link href="{slug}">
            <span>{text}</span>
            <>{icon}</>
        </Link>
      </button>
    </>
  )
}

export default HomeItem
