import { css } from '@emotion/react'
import Link from 'next/link'

import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'

const breadcrumbs = [
  {
    label: '研究グループ一覧',
  },
]

const groupList = [
  {
    group_id: '1A',
    group_name: 'データ駆動型育種',
  },
  {
    group_id: '1B',
    group_name: '精密ゲノム編集',
  },
  {
    group_id: '1C',
    group_name: '農業環境エンジニアリング',
  },
  {
    group_id: '2B',
    group_name: '食によるヘルスケア産業創出',
  },
  {
    group_id: '3A',
    group_name: 'アグリバイオ・化学システム',
  },
  {
    group_id: '3B',
    group_name: '高機能バイオマテリアル設計・生産技術',
  },
  {
    group_id: '3C',
    group_name: '昆虫生産系ものづくり',
  },
  {
    group_id: '3D',
    group_name: 'スマートバイオプロセス',
  },
  {
    group_id: '4Amicrobe',
    group_name: '微生物探索プラットフォーム',
  },
  {
    group_id: '4ADB',
    group_name: 'バリューチェーンデータ基盤構築',
  },
]

const containerStyle = css`
  background-color: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
`

const listStyle = css`
  list-style: disc inside;
  margin-top: 56px;
`

const itemStyle = css`
  margin-bottom: 24px;
`

const linkStyle = css`
  color: var(--col-bl);
`

const GroupIndex = () => {
  return (
    <Layout title="研究グループ一覧">
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <div css={containerStyle}>
          <h1>研究グループ一覧</h1>
          <ul css={listStyle}>
            {groupList.map((group, index) => (
              <li key={index} css={itemStyle}>
                <Link css={linkStyle} href={`/group/${group.group_id}`}>
                  {group.group_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </LowerPageLayout>
    </Layout>
  )
}

export default GroupIndex
