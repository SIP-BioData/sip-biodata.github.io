import { css } from '@emotion/react'
import Link from 'next/link'

type Props = {
  list: Item[]
}

const tableStyle = css`
  width: 100%;
  border: var(--border-gray);
  margin-bottom: 40px;

  th {
    background-color: #f7f7f7;
    border: var(--border-gray);
    padding: 12px 0;

    &:first-child {
      width: 20%;
    }
    &:nth-child(2) {
      width: 30%;
    }
    &:nth-child(3) {
      width: 10%;
    }
    &:nth-child(4) {
      width: 40%;
    }
  }

  td {
    padding: var(--list-padding);
    border: var(--border-gray);
  }
`

const linkStyle = css`
  color: var(--col-bl);
`

const GroupDetailList = (props: Props) => {
  return (
    <table css={tableStyle}>
      <thead>
        <tr>
          <th>研究グループ</th>
          <th>データ</th>
          <th>提供者</th>
          <th>公開（予定）・非公開</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item, index) => (
          <tr key={index}>
            <td>{item.group_name}</td>
            <td>
              <Link css={linkStyle} href="/data/[id]" as={`/data/${item.id}`}>
                {item.name}
              </Link>
            </td>
            <td>{item.supplier}</td>
            <td>{item.publication_status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GroupDetailList
