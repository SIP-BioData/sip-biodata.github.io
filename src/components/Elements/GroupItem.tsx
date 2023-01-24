import { css } from '@emotion/react'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  group: string
  data: string
  target: string
  provider: string
  accesslevel: string
  content: string
  storage: string
  dataform: string
  admin: string
  publicPrivate: string
  database: ReactNode
  reference?: string
}

const style = css`
  border: 1px solid #707070;
  padding: 28px;
  
  dl {
    display: flex;  
    padding: 12px 0 14px;
    
    dt {
      width: 120px;
      margin-right: 30px;
      font-weight: 600;
    }
  }
`

const borderStyle = css`
  border-bottom: 1px solid #EAEAEA;
`

const linkStyle = css`
  color: #0068D0
`

const layoutStyle = css`
  margin-top: 20px;
`



const GroupItem = ({
   group,
   data,
   target,
   provider,
   accesslevel,
   content,
   storage,
   dataform,
   admin,
   publicPrivate,
   database,
   reference
 }: Props) => {
  return (
    <section css={style}>
      <dl>
        <dt>研究グループ</dt>
        <dd>
          <Link css={linkStyle} href="">{group}</Link>
        </dd>
      </dl>
      <dl>
        <dt>データ</dt>
        <dd><Link css={linkStyle} href="">{data}</Link></dd>
      </dl>
      <dl>
        <dt>対象</dt>
        <dd>{target}</dd>
      </dl>
      <dl>
        <dt>提供者</dt>
        <dd>{provider}</dd>
      </dl>
      <dl css={borderStyle}>
        <dt>アクセスレベル</dt>
        <dd>{accesslevel}</dd>
      </dl>
      <dl css={borderStyle}>
        <dt>格納されるデータの内容</dt>
        <dd>{content}</dd>
      </dl>
      <dl css={borderStyle}>
        <dt>データベース・データ格納場所</dt>
        <dd>{storage}</dd>
      </dl>
      <dl css={borderStyle}>
        <dt>データ形式</dt>
        <dd>{dataform}</dd>
      </dl>
      <dl css={borderStyle}>
        <dt>データ管理者</dt>
        <dd>{admin}</dd>
      </dl>
      <dl css={borderStyle}>
        <dt>公開（公開日）・非公開</dt>
        <dd>{publicPrivate}</dd>
      </dl>
      <dl css={borderStyle}>
        <dt>連携可能なデータベース</dt>
        <dd>{database}</dd>
      </dl>
      <dl>
        <dt>参考</dt>
        <dd>{reference}</dd>
      </dl>
      <div css={layoutStyle}>
        <Link css={linkStyle} href="">表示内容を減らす</Link>
      </div>
    </section>
  )
}

export default GroupItem
