import { css } from '@emotion/react'
import Link from 'next/link'

type Item = {
  label: string
  path?: string
}

type Props = {
  items: Item[]
}

const style = css`
  margin: 20px 0 0;
  display: flex;
  flex-wrap: wrap;
`

const itemStyle = css`
  margin-bottom: 8px;
  &::before {
    content: '>';
    margin: 0 8px;
  }
  &:last-child {
    color: var(--col-gr);
  }
`

const Breadcrumbs = (props: Props) => {
  return (
    <nav>
      <ul css={style}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        {props.items.map((item, index) => (
          <li key={index} css={itemStyle}>
            {item.path ? (
              <Link href={item.path}>{item.label}</Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
