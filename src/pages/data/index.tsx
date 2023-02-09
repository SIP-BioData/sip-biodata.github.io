import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import DatabaseItem from '@/components/Elements/DatabaseItem'
import Pagination from '@/components/Elements/Pagination'
import Records from '@/components/Elements/Records'
import SearchForm from '@/components/Elements/SearchForm'
import SelectBox from '@/components/Elements/SelectBox'
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
  }, [props])

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
