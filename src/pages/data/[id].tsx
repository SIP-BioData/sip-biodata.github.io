import { css } from '@emotion/react'

import DataTable from '@/components/Elements/DataTable'
import LinkButton from '@/components/Elements/LinkButton'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import { getDataStaticPaths, getDataStaticProps } from '@/lib/static'

import arrowBack from '../../../public/arrowBack.svg'

export const getStaticProps = getDataStaticProps
export const getStaticPaths = getDataStaticPaths

type Props = {
  title?: string
  data: Item
  columns: Item
}

const containerStyle = css`
  background: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
`

const buttonContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 50px;
`

const DataDetail = (props: Props) => {
  const breadcrumbs = [
    {
      label: 'データリスト',
      path: '/data',
    },
    {
      label: props.data ? `${props.data.sip_name}` : 'データ詳細',
    },
  ]

  return (
    <Layout title={props.data ? `${props.data.sip_name}` : 'データ詳細'}>
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <div css={containerStyle}>
          {props.data && (
            <h1>
              <span>{props.data.sip_name}</span>
              {props.data.sip_group_name && (
                <span>{`/ ${props.data.sip_group_name}`}</span>
              )}
            </h1>
          )}
          <DataTable item={props.data} columns={props.columns} />
          <div css={buttonContainerStyle}>
            <LinkButton path="/data" leftIcon={arrowBack}>
              データリストに戻る
            </LinkButton>
            {props.data.sip_group_id && (
              <LinkButton
                path={`/group/${props.data.sip_group_id}`}
                leftIcon={arrowBack}
              >
                研究グループ：{props.data.sip_group_name}
              </LinkButton>
            )}
          </div>
        </div>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataDetail
