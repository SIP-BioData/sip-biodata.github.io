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
  }

  p {
    max-width: var(--w875);
    width: 100%;
    margin: 76px auto 50px;
    line-height: 1.9;
  }
`
const HomeItem = (props: Props) => {
  return <section css={style}>{props.children}</section>
}

export default HomeItem
