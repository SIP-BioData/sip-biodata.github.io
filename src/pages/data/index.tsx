import { css } from '@emotion/react'
import fsPromises from 'fs/promises'
import path from 'path'
import { useEffect, useState } from 'react'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import DatabaseItem from '@/components/Elements/DatabaseItem'
import Pagination from '@/components/Elements/Pagination'
import Records from '@/components/Elements/Records'
import SearchForm from '@/components/Elements/SearchForm'
import SelectBox from '@/components/Elements/SelectBox'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'

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

const style = css`
  background-color: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;

  h2 {
    margin-top: 48px;
  }
`

const flexStyleLeft = css`
  display: flex;
  align-items: center;
`

const flexStyleAll = css`
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DataIndex = (props: Props) => {
  const [count, setCount] = useState(0)
  const [database, setDatabase] = useState<Array<Item>>([])
  const perPage = 20
  const mergedDatabase = [...props.sipDatabase, ...props.integbioDatabase]
  const columns = [...props.sipDatabaseColumn, ...props.integbioDatabaseColumn]

  useEffect(() => {
    handlePaginate(1)
    setCount(mergedDatabase.length)
  }, [props.sipDatabase, props.integbioDatabase])

  const onChangeKeyword = (value: string) => {
    const filteredDatabase =
      value !== ''
        ? database.filter((item) =>
            Object.values(item).find((v) =>
              v != null ? v.includes(value) : false
            )
          )
        : mergedDatabase
    setDatabase(filteredDatabase)
    setCount(filteredDatabase.length)
  }

  const handlePaginate = (page: number) => {
    const currentPageItems = mergedDatabase.filter(
      (_, index) => index >= (page - 1) * perPage && index < page * perPage
    )
    setDatabase(currentPageItems)
  }

  return (
    <Layout title={props.title}>
      <LowerPageLayout>
        <Breadcrumbs childTitle={props.title} />
        <section css={style}>
          <SearchForm onChangeKeyword={onChangeKeyword} />
          <h2>{props.title}</h2>
          <div css={flexStyleAll}>
            <section css={flexStyleLeft}>
              <Records num={count} />
              <Pagination
                sum={count}
                perPage={perPage}
                onChange={handlePaginate}
              />
            </section>
            <SelectBox />
          </div>
          {database &&
            database.map((item, index) => (
              <DatabaseItem key={index} item={item} columns={columns[0]} />
            ))}
        </section>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataIndex

export const getStaticProps = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())

  const filePathIntegbio = path.join(
    process.cwd(),
    './data/integbio_database.json'
  )
  const dataIntegbio = await fsPromises.readFile(filePathIntegbio)
  const objectDataIntegbio = JSON.parse(dataIntegbio.toString())

  const filePathSipColumn = path.join(
    process.cwd(),
    './data/sip_database_column.json'
  )
  const dataSipColumn = await fsPromises.readFile(filePathSipColumn)
  const objectDataSipColumn = JSON.parse(dataSipColumn.toString())

  const filePathIntegbioColumn = path.join(
    process.cwd(),
    './data/integbio_database_column.json'
  )
  const dataIntegbioColumn = await fsPromises.readFile(filePathIntegbioColumn)
  const objectDataIntegbioColumn = JSON.parse(dataIntegbioColumn.toString())

  return {
    props: {
      sipDatabase: objectDataSip,
      integbioDatabase: objectDataIntegbio,
      sipDatabaseColumn: objectDataSipColumn,
      integbioDatabaseColumn: objectDataIntegbioColumn,
    },
  }
}
