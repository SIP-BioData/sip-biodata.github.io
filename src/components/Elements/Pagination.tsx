import { css } from '@emotion/react'

type Props = {
  first_num: number
  last_num: number
}

const style = css`
  display: flex;
`
const Pagenation = ({ first_num, last_num  }: Props) => {
  return (
    <ul css={style}>
      <li id="prev">＜</li>
      <li>{first_num}</li>
      <li>ー</li>
      <li>{last_num}</li>
      <li id="next">＞</li>
    </ul>
  )
}

export default Pagenation
