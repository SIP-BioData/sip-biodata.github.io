import { css } from '@emotion/react'
import { Fragment, useState } from 'react'

type Item = {
  [key: string]: string
}

type Props = {
  item: Item
  columns: Item
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
    padding: 0 12px 16px 0;
    margin-bottom: 16px;
  }

  dd {
    flex: 1 1 70%;
    padding-bottom: 16px;
    margin-bottom: 16px;
    word-break: break-word;
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
  border-bottom: 1px solid #eaeaea;
`

// const linkStyle = css`
//   color: #0068d0;
// `

const DatabaseItem = (props: Props) => {
  const [isDisplayAll, setIsDisplayAll] = useState(false)

  const excludeKeys = ['id', 'group_id']
  excludeKeys.map((v) => delete props.item[v])

  const defaultKeys = ['group_name', 'name', 'supplier', 'publication_status']

  return (
    <section css={style}>
      <dl>
        {Object.entries(props.item)
          .filter(([k]) => defaultKeys.includes(k))
          .map(([key, value], index) => (
            <Fragment key={index}>
              <dt css={borderStyle}>
                {Object.keys(props.columns).find(
                  (k) => props.columns[k] === key
                )}
              </dt>
              <dd css={borderStyle}>{value}</dd>
            </Fragment>
          ))}
        {isDisplayAll &&
          Object.entries(props.item)
            .filter(([k]) => !defaultKeys.includes(k))
            .map(([key, value], index) => (
              <Fragment key={index}>
                <dt css={borderStyle}>
                  {Object.keys(props.columns).find(
                    (k) => props.columns[k] === key
                  )}
                </dt>
                <dd css={borderStyle}>{value}</dd>
              </Fragment>
            ))}
      </dl>
      {isDisplayAll ? (
        <button onClick={() => setIsDisplayAll(false)}>表示内容を減らす</button>
      ) : (
        <button onClick={() => setIsDisplayAll(true)}>もっと見る</button>
      )}
    </section>
  )
}

export default DatabaseItem
