import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const style = css`
  background: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
`

const DetailItem = ({ children }: Props) => {
  return <section css={style}>{children}</section>
}

export default DetailItem
