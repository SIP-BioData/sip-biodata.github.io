import { css } from '@emotion/react'
import Link from 'next/link'
import { Fragment, ReactNode, useState } from 'react'

type Item = {
  [key: string]: string
}

type Props = {
  item: Item
  columns: Item
}

type LinkItemProps = {
  children: ReactNode
  item: Item
  target: string
  route: string
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
    border-bottom: 1px solid #eaeaea;
  }

  dd {
    flex: 1 1 70%;
    padding-bottom: 16px;
    margin-bottom: 16px;
    word-break: break-word;
    border-bottom: 1px solid #eaeaea;
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

const linkStyle = css`
  color: var(--col-bl);
`

const LinkItem = (itemProps: LinkItemProps) => {
  return (
    <Link
      css={linkStyle}
      href={`/${itemProps.route}/[${itemProps.target}]`}
      as={`/${itemProps.route}/${itemProps.item[itemProps.target]}`}
    >
      {itemProps.children}
    </Link>
  )
}

const DatabaseItem = (props: Props) => {
  const [isDisplayAll, setIsDisplayAll] = useState(false)
  const displayItems = (({ id, group_id, ...rest }) => rest)(props.item)
  const defaultKeys = ['group_name', 'name', 'supplier', 'publication_status']

  return (
    <section css={style}>
      <dl>
        {Object.entries(displayItems)
          .filter(([k]) => defaultKeys.includes(k))
          .map(([key, value], index) => (
            <Fragment key={index}>
              <dt>
                {Object.keys(props.columns).find(
                  (k) => props.columns[k] === key
                )}
              </dt>
              <dd>
                {key === 'name' ? (
                  <LinkItem item={props.item} target="id" route="data">
                    {value}
                  </LinkItem>
                ) : key === 'group_name' ? (
                  <LinkItem item={props.item} target="group_id" route="group">
                    {value}
                  </LinkItem>
                ) : (
                  value
                )}
              </dd>
            </Fragment>
          ))}
        {isDisplayAll &&
          Object.entries(displayItems)
            .filter(([k]) => !defaultKeys.includes(k))
            .map(([key, value], index) => (
              <Fragment key={index}>
                <dt>
                  {Object.keys(props.columns).find(
                    (k) => props.columns[k] === key
                  )}
                </dt>
                <dd>{value}</dd>
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
