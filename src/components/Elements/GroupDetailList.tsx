import { css } from '@emotion/react'

type Props = {
  group: string
  url: string
  data: string
  target: string
  provider: string
  accessLevel: string
}

const h2Style = css`
  font-size: 26px;
  margin-bottom: 38px;
`

const tableStyle = css`
  width: 100%;
  border: var(--border-gray);

  th {
    background-color: #f7f7f7;
    border: var(--border-gray);
    padding: 12px 0;
  }

  td {
    padding: var(--list-padding);
    border: var(--border-gray);
  }

  td:nth-child(2) {
    width: 342px;
    color: var(--col-bl);
  }
`

const GroupDetailList = ({
  group,
  url,
  data,
  target,
  provider,
  accessLevel,
}: Props) => {
  return (
    <>
      <h2 css={h2Style}>データ一覧</h2>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th>研究グループ</th>
            <th>データ</th>
            <th>対象</th>
            <th>提供者</th>
            <th>アクセスレベル</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{group}</td>
            <td>
              <a href={url}>{data}</a>
            </td>
            <td>{target}</td>
            <td>{provider}</td>
            <td>{accessLevel}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default GroupDetailList
