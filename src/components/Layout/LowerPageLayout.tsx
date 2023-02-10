import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const style = css`
  max-width: var(--conts-inn);
  margin: 0 auto;
  padding: 140px 0 0;
`

const LowerPageLayout = ({ children }: Props) => {
  return <div css={style}>{children}</div>
}

export default LowerPageLayout
