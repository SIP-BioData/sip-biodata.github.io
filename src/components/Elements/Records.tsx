import { css } from '@emotion/react'

type Props = {
  num: number
}

const style = css`
  font-size: 14px;

  span {
    display: inline-flex;
    margin-left: 8px;
  }
`
const Records = ({ num }: Props) => {
  return (
    <p css={style}>
      {num}
      <span>records</span>
    </p>
  )
}

export default Records
