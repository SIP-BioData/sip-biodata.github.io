import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  group: string
  data: string
  content: string
  storage: string
  dataForm: string
  provider: string
  admin: string
  publicPrivate: string
  accessLevel: string
  database: ReactNode
  reference: string
}

const style = css`
  border: var(--border-gray);
  margin-top: 55px;

  td:first-of-type {
    width: 262px;
    padding: var(--list-padding);
    background-color: #f7f7f7;
    border: var(--border-gray);
  }

  td:last-of-type {
    padding: var(--list-padding);
    border: var(--border-gray);
  }
`

const ListItem = ({
  group,
  data,
  content,
  storage,
  dataForm,
  provider,
  admin,
  publicPrivate,
  accessLevel,
  database,
  reference,
}: Props) => {
  return (
    <table css={style}>
      <tbody>
        <tr>
          <td>研究グループ</td>
          <td>{group}</td>
        </tr>
        <tr>
          <td>データ</td>
          <td>{data}</td>
        </tr>
        <tr>
          <td>格納されるデータの内容</td>
          <td>{content}</td>
        </tr>
        <tr>
          <td>データベース・データ格納場所</td>
          <td>{storage}</td>
        </tr>
        <tr>
          <td>データ形式</td>
          <td>{dataForm}</td>
        </tr>
        <tr>
          <td>提供者</td>
          <td>{provider}</td>
        </tr>
        <tr>
          <td>データ管理者</td>
          <td>{admin}</td>
        </tr>
        <tr>
          <td>公開（公開日）・非公開</td>
          <td>{publicPrivate}</td>
        </tr>
        <tr>
          <td>アクセスレベル（利用条件）</td>
          <td>{accessLevel}</td>
        </tr>
        <tr>
          <td>連携可能なデータベース</td>
          <td>{database}</td>
        </tr>
        <tr>
          <td>参考</td>
          <td>{reference}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default ListItem
