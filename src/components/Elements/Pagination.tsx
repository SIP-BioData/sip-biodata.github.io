import { css } from '@emotion/react'

type Props = {
  first_num: number
  last_num: number
}

const style = css`
  display: flex;
  align-items: center;
  border: var(--border-base);
  border-radius: 5px;
  margin-left: 28px;

  li {
    &:first-child {
      padding: 15px 17px;
      border-right: var(--border-base);
      color: #9b9b9b;
    }
    &:last-child {
      padding: 15px 17px;
      border-left: var(--border-base);
      color: #9b9b9b;
    }
    &:nth-child(2n) {
      width: 40px;
      text-align: center;
      border: var(--border-base);
      margin: 0 16px;
      padding: 6px 0;
      border-radius: 2px;
      font-size: 14px;
    }
  }
`
const Pagination = ({ first_num, last_num }: Props) => {
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

export default Pagination
