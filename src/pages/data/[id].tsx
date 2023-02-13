import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import LinkButton from '@/components/Elements/LinkButton'
import DataTable from '@/components/Elements/DataTable'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import { getDatabaseStaticProps, getDataStaticPaths } from '@/lib/static'

import arrowBack from '../../../public/arrowBack.svg'

export const getStaticProps = getDatabaseStaticProps
export const getStaticPaths = getDataStaticPaths

type Props = {
  title?: string
  sipDatabase: Item[]
  integbioDatabase: Item[]
  sipDatabaseColumn: Item[]
  integbioDatabaseColumn: Item[]
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
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState<Item | null>(null)
  const mergedDatabase = [...props.sipDatabase, ...props.integbioDatabase]
  const columns = [...props.sipDatabaseColumn, ...props.integbioDatabaseColumn]
  const columnsObject = Object.assign(columns[0], columns[1])

  const breadcrumbs = [
    {
      label: 'データリスト',
      path: '/data',
    },
    {
      label: data ? `${data.name}` : 'データ詳細',
    },
  ]

  useEffect(() => {
    const currentData = mergedDatabase.find((v) => v.id === id) || null
    setData(currentData)
  }, [props, id])

  return (
    <Layout title={data ? `${data.name}` : 'データ詳細'}>
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <section css={sectionStyle}>
          {data && (
            <h1>
              <span>{data.name}</span>
              {data.group_name && <span>{`/ ${data.group_name}`}</span>}
            </h1>
          )}
          <DataTable item={data} columns={columnsObject} />
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
