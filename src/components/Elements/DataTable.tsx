import { css } from '@emotion/react'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  item: Item | null
  columns: Item
}

type LinkItemProps = {
  children: ReactNode
  item: Item | null
  target: string
  route: string
}

const tableStyle = css`
  width: 100%;
  border: var(--border-gray);
  margin-top: 55px;
`

const thStyle = css`
  width: 30%;
  padding: var(--list-padding);
  background-color: #f7f7f7;
  border: var(--border-gray);
  text-align: left;
`

const cellStyle = css`
  padding: var(--list-padding);
  border: var(--border-gray);
  word-break: break-word;
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
    itemProps.item && (
      <Link
        css={linkStyle}
        href={`/${itemProps.route}/[id]`}
        as={`/${itemProps.route}/${itemProps.item[itemProps.target]}`}
      >
        {itemProps.children}
      </Link>
    )
  )
}

const DataTable = (props: Props) => {
  const displayItems = props.item
    ? (({ id, group_id, ...rest }) => rest)(props.item)
    : null

  return (
    <table css={tableStyle}>
      <tbody>
        {displayItems &&
          Object.entries(displayItems)
            .filter(([, v]) => v)
            .map(([key, value], index) => (
              <tr key={index}>
                <th css={thStyle}>
                  {Object.keys(props.columns).find(
                    (k) => props.columns[k] === key
                  )}
                </th>
                <td css={cellStyle}>
                  {key === 'group_name' ? (
                    <LinkItem item={props.item} target="group_id" route="group">
                      {value}
                    </LinkItem>
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
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  )
}

export default DataTable
