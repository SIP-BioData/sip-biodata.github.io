import { css } from '@emotion/react'
import Link from 'next/link'

type Props = {
  list: Item[]
  columns: Item
}

const tableContainerStyle = css`
  overflow-x: auto;
  width: 100%;
  margin-bottom: 40px;
  -webkit-overflow-scrolling: touch;
`

const tableStyle = css`
  font-size: 14px;
  border: var(--border-gray);

  th {
    background-color: #f7f7f7;
    border: var(--border-gray);
    padding: 12px 20px;
  }

  td {
    padding: var(--list-padding);
    border: var(--border-gray);
    white-space: pre-wrap;
  }
`

const noWrapStyle = css`
  white-space: nowrap;
`

const wrapStyle = css`
  white-space: unset;
`

const wrapStyleWide = css`
  ${wrapStyle};
  min-width: 500px;
`

const wrapStyleThin = css`
  ${wrapStyle};
  min-width: 280px;
`

const linkStyle = css`
  font-size: 14px;
  color: var(--col-bl);
`

const displayKeys = [
  'sip_group_name',
  'sip_name',
  'sip_format',
  'sip_administrator',
  'sip_publication_status',
]

const GroupDetailList = (props: Props) => {
  const itemsWithDisplayKeys = props.list.map((item) =>
    Object.fromEntries(
      Object.entries(item).filter(([k]) => displayKeys.includes(k))
    )
  )
  return (
    <div css={tableContainerStyle}>
      <table css={tableStyle}>
        <thead>
          <tr>
            {displayKeys.map((item, index) => (
              <th key={`heading-${index}`} css={noWrapStyle}>
                {Object.keys(props.columns).find(
                  (k) => props.columns[k] === item
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {itemsWithDisplayKeys.map((item, index) => (
            <tr key={`row-${index}`}>
              {displayKeys.map((k, i) =>
                k === 'sip_name' ? (
                  <td key={`cell-${i}`} css={wrapStyleThin}>
                    <Link
                      css={linkStyle}
                      href="/data/[id]"
                      as={`/data/${props.list[index].sip_id}`}
                    >
                      {item[k]}
                    </Link>
                  </td>
                ) : (
                  <td
                    key={`cell-${i}`}
                    css={
                      k === 'sip_publication_status'
                        ? wrapStyleWide
                        : noWrapStyle
                    }
                  >
                    {item[k]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GroupDetailList
