import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import Button from '@/components/Elements/Button'
import DataTable from '@/components/Elements/DataTable'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import { getDatabaseStaticProps, getDataStaticPaths } from '@/lib/static'

export const getStaticProps = getDatabaseStaticProps
export const getStaticPaths = getDataStaticPaths

type Item = {
  [key: string]: string
}

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

const buttonStyle = css`
  margin: 50px auto 0;
  text-align: center;
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
          <div css={buttonStyle}>
            <Button
              iconLeft={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="arrow-up-circle-outline"
                    d="M8.8,3.2H7.2V9.6L4.4,6.8,3.264,7.936,8,12.672l4.736-4.736L11.6,6.8,8.8,9.6V3.2M8,16A8,8,0,1,0,0,8a8,8,0,0,0,8,8m0-1.6A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4Z"
                    transform="translate(16) rotate(90)"
                    fill="#fff"
                  />
                </svg>
              }
              slug="/data"
              text="データリストに戻る"
            />
            <Button
              iconLeft={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="arrow-up-circle-outline"
                    d="M8.8,3.2H7.2V9.6L4.4,6.8,3.264,7.936,8,12.672l4.736-4.736L11.6,6.8,8.8,9.6V3.2M8,16A8,8,0,1,0,0,8a8,8,0,0,0,8,8m0-1.6A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4Z"
                    transform="translate(16) rotate(90)"
                    fill="#fff"
                  />
                </svg>
              }
              slug="/group"
              text="研究グループに戻る"
            />
          </div>
        </section>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataDetail
