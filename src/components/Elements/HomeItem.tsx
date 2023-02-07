import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  title: string
  text: ReactNode
  item?: ReactNode
}

const style = css`
  margin: 100px 0;

  h2 {
    font-size: 38px;
    text-align: center;
  }

  p {
    max-width: var(--w875);
    width: 100%;
    margin: 76px auto 50px;
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
      &::after {
      }
    }
  }
`
const HomeItem = ({ title, text, item }: Props) => {
  return (
    <div css={style}>
      <h2>{title}</h2>
      <p>{text}</p>
      <>{item}</>
    </div>
  )
}

export default HomeItem
