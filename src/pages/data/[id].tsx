import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import Button from '@/components/Elements/Button'
import DataTable from '@/components/Elements/DataTable'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import { getDatabaseStaticProps } from '@/lib/static'

export const getStaticProps = getDatabaseStaticProps

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

  useEffect(() => {
    const currentData = mergedDatabase.find((v) => v.id === id) || null
    setData(currentData)
  }, [props, id])

  return (
    <Layout title="データ詳細">
      <LowerPageLayout>
        <Breadcrumbs title={props.title} path="data" childTitle="xxx" />
        <section css={sectionStyle}>
          {data && <h2>{`${data.name} / ${data.group_name}`}</h2>}
          <DataTable item={data} columns={columns[0]} />
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

export async function getStaticPaths() {
  return {
    paths: ['/data/[id]'],
    fallback: true,
  }
}
