import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

import DatabaseItem from '@/components/Elements/DatabaseItem'
import Records from '@/components/Elements/Records'
import SearchForm from '@/components/Elements/SearchForm'
import SelectBox from '@/components/Elements/SelectBox'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import Pagination from '@/components/Navigation/Pagination'
import { getDatabaseStaticProps } from '@/lib/static'
import {
  buildParams,
  debounce,
  getFilteredItems,
  getSearchWordsFromQuery,
  getSortedItems,
  updateRoute,
} from '@/lib/utils'

export const getStaticProps = getDatabaseStaticProps

type Props = {
  sipDatabase: Item[]
  integbioDatabase: Item[]
  sipDatabaseColumn: Item[]
  integbioDatabaseColumn: Item[]
}

const breadcrumbs = [
  {
    label: 'データリスト',
  },
]

const style = css`
  background-color: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
`

const titleStyle = css`
  margin-top: 48px;
`

const flexStyleAll = css`
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`

const itemsForSort = [
  {
    label: 'データ／DB：昇順',
    value: 'sip_name|integbio_name',
    order: 'asc',
  },
  {
    label: 'データ／DB：降順',
    value: 'sip_name|integbio_name',
    order: 'desc',
  },
  {
    label: 'データ管理者／運用機関名：昇順',
    value: 'sip_administrator|integbio_asset_manager_name',
    order: 'asc',
  },
  {
    label: 'データ管理者／運用機関名：降順',
    value: 'sip_administrator|integbio_asset_manager_name',
    order: 'desc',
  },
]

const DataIndex = (props: Props) => {
  const router = useRouter()
  const searchWords = getSearchWordsFromQuery(router.query)
  const params = buildParams(router)
  const [count, setCount] = useState(0)
  const [keywords, setKeywords] = useState<Array<string>>([])
  const [database, setDatabase] = useState<Array<Item>>([])
  const [dataPerPage, setDataPerPage] = useState<Array<Item>>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortValue, setSortValue] = useState<string | null>(null)
  const perPage = 20
  const mergedDatabase = [...props.sipDatabase, ...props.integbioDatabase]
  const columns = [...props.sipDatabaseColumn, ...props.integbioDatabaseColumn]
  const columnsObject = Object.assign(columns[0], columns[1])

  const searchWordsQuery = useMemo(
    () => getFilteredItems(database, searchWords),
    [searchWords]
  )

  useEffect(() => {
    if (router.query) {
      return
    }
    setDatabase(mergedDatabase)
    setCount(mergedDatabase.length)
    setCurrentPage(1)
  }, [props])

  useEffect(() => {
    handlePaginate(1)
    setSortValue(null)
  }, [database])

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (searchWords.length > 0) {
      setDatabase(searchWordsQuery)
      setCount(searchWordsQuery.length)
      setKeywords(searchWords)
    }
  }, [router.query, router.isReady])

  const handleResetFilter = () => {
    if (router.isReady) {
      updateRoute(router, {}, {})
    }
  }

  const handleUpdateRoute = debounce((searchWords) => {
    updateRoute(router, params, { 'search[]': searchWords })
  })

  const onChangeKeyword = (keywordList: string[]) => {
    const filteredDatabase =
      keywordList.length > 0
        ? getFilteredItems(mergedDatabase, keywordList)
        : mergedDatabase
    setDatabase(filteredDatabase)
    setCount(filteredDatabase.length)
    setCurrentPage(1)
    if (keywordList.length > 0) {
      handleUpdateRoute(keywordList)
    } else {
      handleResetFilter()
    }
  }

  const handlePaginate = (page: number) => {
    const currentPageItems = database.filter(
      (_, index) => index >= (page - 1) * perPage && index < page * perPage
    )
    setCurrentPage(page)
    setDataPerPage(currentPageItems)
  }

  const handleSort = (item: string | null) => {
    if (item) {
      const [value, order] = item.split(':')
      const sortedDatabase = getSortedItems(database, value, order)
      setDatabase(sortedDatabase)
    } else {
      const filteredDatabase =
        keywords.length > 0
          ? getFilteredItems(mergedDatabase, keywords)
          : mergedDatabase
      setDatabase(filteredDatabase)
    }
    setSortValue(item)
    handlePaginate(1)
  }

  return (
    <Layout title="データリスト">
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <section css={style}>
          <SearchForm keywords={keywords} onChangeKeyword={onChangeKeyword} />
          <h1 css={titleStyle}>データリスト</h1>
          <div css={flexStyleAll}>
            <Records num={count} />
            <Pagination
              sum={count}
              perPage={perPage}
              current={currentPage}
              onChange={handlePaginate}
            />
            <SelectBox
              items={itemsForSort}
              current={sortValue}
              onChangeItem={handleSort}
            />
          </div>
          {dataPerPage.length > 0 &&
            dataPerPage.map((item, index) => (
              <DatabaseItem
                key={index}
                item={item}
                columns={columnsObject}
                resetStateItem={dataPerPage}
              />
            ))}
        </section>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataIndex
