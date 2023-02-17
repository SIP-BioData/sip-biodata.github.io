import { css } from '@emotion/react'
import Link from 'next/link'
import { Fragment, ReactNode, useEffect, useState } from 'react'

type Props = {
  item: Item
  columns: Item
  resetStateItem: string | number | (string | number | Item)[]
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
    white-space: pre-wrap;
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

const externalLinkStyle = css`
  color: var(--col-bl);
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: var(--col-bl);
    mask: var(--link-icon-url) no-repeat;
    vertical-align: middle;
    margin-left: 12px;
  }
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

const defaultKeys = [
  'sip_group_name',
  'sip_name',
  'sip_format',
  'sip_administrator',
  'sip_publication_status',
  'integbio_group_name',
  'integbio_name',
  'integbio_asset_manager_name',
  'integbio_target_tag',
  'integbio_type_tag',
]

const DatabaseItem = (props: Props) => {
  const [isDisplayAll, setIsDisplayAll] = useState(false)
  const displayItems = (({ type, sip_id, sip_group_id, integbio_id, ...rest }) =>
    rest)(props.item)

  useEffect(() => {
    setIsDisplayAll(false)
  }, [props.resetStateItem])

  return (
    <section css={style}>
      <dl>
        {Object.entries(displayItems)
          .filter(([k, v]) => v && defaultKeys.includes(k))
          .map(([key, value], index) => (
            <Fragment key={index}>
              <dt>
                {key === 'integbio_group_name'
                  ? 'カタログ'
                  : key === 'integbio_name'
                  ? 'DB'
                  : Object.keys(props.columns).find(
                      (k) => props.columns[k] === key
                    )}
              </dt>
              <dd>
                {key === 'sip_name' ? (
                  <LinkItem item={props.item} target="sip_id" route="data">
                    {value}
                  </LinkItem>
                ) : key === 'sip_group_name' ? (
                  <LinkItem
                    item={props.item}
                    target="sip_group_id"
                    route="group"
                  >
                    {value}
                  </LinkItem>
                ) : key === 'integbio_name' ? (
                  <a
                    href={`https://integbio.jp/dbcatalog/record/${props.item.integbio_id.toLowerCase()}`}
                    target="_blank"
                    rel="noreferrer"
                    css={externalLinkStyle}
                  >
                    {value}
                  </a>
                ) : /^http.?:\/\//.test(value) ? (
                  <a
                    href={value}
                    target="_blank"
                    rel="noreferrer"
                    css={externalLinkStyle}
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </Fragment>
          ))}
        {isDisplayAll &&
          Object.entries(displayItems)
            .filter(([k, v]) => v && !defaultKeys.includes(k))
            .map(([key, value], index) => (
              <Fragment key={index}>
                <dt>
                  {Object.keys(props.columns).find(
                    (k) => props.columns[k] === key
                  )}
                </dt>
                <dd>
                  {/^http.?:\/\//.test(value) ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noreferrer"
                      css={externalLinkStyle}
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
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
