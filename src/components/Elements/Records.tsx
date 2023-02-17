import { css } from '@emotion/react'

type Props = {
  num: number
}

const style = css`
  padding-left: 8px;
`

const Records = ({ num }: Props) => {
  return (
    <p>
      {num}
      <span css={style}>records</span>
    </p>
  )
}

export default Records
