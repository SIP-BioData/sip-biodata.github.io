import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const style = css`
  padding: 100px 24px;
  word-break: break-all;

  h2 {
    font-size: 38px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 76px;
  }

  p {
    max-width: var(--w875);
    width: 100%;
    margin: 0 auto 18px;
    line-height: 1.9;
  }

  ul {
    max-width: var(--w875);
    width: 100%;
    list-style: disc;
    margin: 0 auto 18px;

    li {
      margin: 0 0 10px 1.5em;
    }
  }
`
const HomeItem = (props: Props) => {
  return <section css={style}>{props.children}</section>
}

export default HomeItem
