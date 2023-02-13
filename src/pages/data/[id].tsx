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

const sectionStyle = css`
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
      label: props.data ? `${props.data.name}` : 'データ詳細',
    },
  ]

  return (
    <Layout title={props.data ? `${props.data.name}` : 'データ詳細'}>
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <section css={sectionStyle}>
          {props.data && (
            <h1>
              <span>{props.data.name}</span>
              {props.data.group_name && (
                <span>{`/ ${props.data.group_name}`}</span>
              )}
            </h1>
          )}
          <DataTable item={props.data} columns={props.columns} />
          <div css={buttonContainerStyle}>
            <LinkButton path="/data" leftIcon={arrowBack}>
              データリストに戻る
            </LinkButton>
            <LinkButton path="/group" leftIcon={arrowBack}>
              研究グループに戻る
            </LinkButton>
          </div>
        </section>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataDetail
