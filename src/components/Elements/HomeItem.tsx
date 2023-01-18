import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  title: string
  text: ReactNode
  item?: ReactNode
}

const style = css`
  max-width: var(--item-textW);
  margin: 100px auto;

  h3 {
    font-size: 38px;
    text-align: center;
  }

  p {
    margin: 76px 0 0;
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
    background: #000118;
    a {
      color: #fff;
      &::after {
      }
    }
  }
`
const HomeItem = ({ title, text, item }: Props) => {
  return (
    <section css={style}>
      <h3>{title}</h3>
      <p>{text}</p>
      <>{item}</>
    </section>
  )
}

export default HomeItem
