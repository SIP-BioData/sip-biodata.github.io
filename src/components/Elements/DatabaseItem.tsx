import { css } from '@emotion/react'
import { Fragment, useState } from 'react'

type Item = {
  [key: string]: string
}

type Props = {
  item: Item
}

const style = css`
  border: var(--border-gray);
  margin-top: 32px;
  padding: 28px;

  dl {
    display: flex;
    flex-wrap: wrap;
  }

  dt {
    flex: 1 1 30%;
    font-weight: 600;
    margin-bottom: 16px;
  }

  dd {
    flex: 1 1 70%;
    margin-bottom: 16px;
  }

  button {
    background: none;
    border: none;
    outline: none;
    appearance: none;
    margin-top: 16px;
    color: var(--col-bl);
  }
`

const borderStyle = css`
  border-top: 1px solid #eaeaea;
`

const linkStyle = css`
  color: #0068d0;
`

const displayAllStyle = css`
  display: none;
`

const DatabaseItem = (props: Props) => {
  const [isDisplayAll, setIsDisplayAll] = useState(false)

  return (
    <section css={style}>
      <dl>
        {Object.entries(props.item).map(([key, value], index) => (
          <Fragment key={index}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
      {isDisplayAll && (
        <>
          <dl css={borderStyle}>
            <dt>格納されるデータの内容</dt>
            <dd>xxx</dd>
          </dl>
          <button onClick={() => setIsDisplayAll(false)}>
            表示内容を減らす
          </button>
        </>
      )}
      <div css={isDisplayAll ? displayAllStyle : undefined}>
        <button onClick={() => setIsDisplayAll(true)}>もっと見る</button>
      </div>
    </section>
  )
}

export default DatabaseItem
