import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const style = css`
  max-width: var(--conts-inn);
  margin: 0 auto;
`

const LowerPageLayout = ({ children }: Props) => {
  return <article css={style}>{children}</article>
}

export default LowerPageLayout
