import { css } from '@emotion/react'
import Link from 'next/link'

import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import { getSipGroupIndexStaticProps } from '@/lib/static'

export const getStaticProps = getSipGroupIndexStaticProps

type Props = {
  groupList: {
    groupId: string
    groupName: string
  }[]
}

const breadcrumbs = [
  {
    label: '研究グループ一覧',
  },
]

const mq = {
  mini: '@media (max-width: 600px)',
}

const containerStyle = css`
  background-color: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
  ${mq.mini} {
    padding: 60px 16px;
  }
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

const GroupIndex = (props: Props) => {
  return (
    <Layout title="研究グループ一覧">
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <div css={containerStyle}>
          <h1>研究グループ一覧</h1>
          <ul css={listStyle}>
            {props.groupList.map((group, index) => (
              <li key={index} css={itemStyle}>
                <Link css={linkStyle} href={`/group/${group.groupId}`}>
                  {group.groupName}
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
