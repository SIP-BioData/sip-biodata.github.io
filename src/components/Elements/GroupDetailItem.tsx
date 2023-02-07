import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  subtitle?: string
  text?: string
  item?: ReactNode
  url?: string
  icon?: ReactNode
}

const style = css`
  margin: 16px 0;
  padding: 0 0 40px;
  border-bottom: var(--border-base);

  h3 {
    margin: 40px 0 0;
    padding: 0 0 40px;
    font-size: 26px;
  }

  p {
    line-height: calc(38 / 20);
    margin: 0 0 34px;
  }

  img {
    display: block;
  }

  a {
    display: inline-block;
    margin-right: 8px;
    color: var(--col-bl);
  }
`

const GroupDetailItem = ({ subtitle, text, item, url, icon }: Props) => {
  return (
    <div css={style}>
      <h3>{subtitle}</h3>
      <>{text}</>
      <>{item}</>
      <a href="">{url}</a>
      <span>{icon}</span>
    </div>
  )
}

export default GroupDetailItem
