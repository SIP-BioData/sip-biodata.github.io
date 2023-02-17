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
  getDatabaseTypeFromQuery,
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

const containerStyle = css`
  background-color: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
`

const titleStyle = css`
  margin-bottom: 48px;
`

const functionUiContainerStyle = css`
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`

const tabContainerStyle = css`
  margin-top: 44px;
`

const tabStyle = css`
  display: flex;
  align-items: end;
  gap: 22px;
  padding: 0 3px;
  margin-bottom: -1px;
  overflow: hidden;
`

const tabItemStyle = css`
  flex: 1 1 50%;
  box-shadow: var(--shadow-wide);
  background-color: var(--col-bg-gray);
  border-radius: 8px 8px 0 0;
  padding: 8px 0;
`

const tabItemCurrentStyle = css`
  ${tabItemStyle};
  border-top: 8px solid var(--col-light-gray);
  background-color: var(--col-wh);
  padding-top: 0;
`

const buttonStyle = css`
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 16px;
  border: none;
  border-radius: 4px;
  appearance: none;
  background: none;
  cursor: pointer;
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
  const dataType = getDatabaseTypeFromQuery(router.query)
  const params = buildParams(router)
  const [count, setCount] = useState(0)
  const [keywords, setKeywords] = useState<Array<string>>([])
  const [database, setDatabase] = useState<Array<Item>>([])
  const [currentDatabase, setCurrentDatabase] = useState<Array<Item>>([])
  const [dataPerPage, setDataPerPage] = useState<Array<Item>>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortValue, setSortValue] = useState<string | null>(null)
  const [databaseType, setDatabaseType] = useState<string>('')
  const perPage = 20
  const defaultDatabase = {
    sip: props.sipDatabase,
    integbio: props.integbioDatabase,
    merged: [...props.sipDatabase, ...props.integbioDatabase],
  }
  const columns = [...props.sipDatabaseColumn, ...props.integbioDatabaseColumn]
  const columnsObject = Object.assign(columns[0], columns[1])

  const searchWordsQuery = useMemo(
    () => getFilteredItems(database, searchWords),
    [searchWords]
  )

  useEffect(() => {
    setDatabaseType('sip')
    setDatabase(defaultDatabase.merged)
    setCount(defaultDatabase.sip.length)
    setCurrentPage(1)
  }, [props])

  useEffect(() => {
    const currentDatabase = database.filter(
      (item) => item.type === databaseType
    )
    setCurrentDatabase(currentDatabase)
    setCurrentPage(1)
    setSortValue(null)
  }, [database, databaseType])

  useEffect(() => {
    if (currentPage === 1) {
      handlePaginate(currentPage)
    }
  }, [currentPage, currentDatabase])

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (dataType) {
      setDatabaseType(dataType)
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

  const handleUpdateSearchRoute = debounce((searchWords) => {
    updateRoute(router, params, { 'search[]': searchWords })
  })

  const handleUpdateDatabaseRoute = debounce((dataType) => {
    updateRoute(router, params, { database: dataType })
  })

  const onChangeKeyword = (keywordList: string[]) => {
    const filteredDatabase =
      keywordList.length > 0
        ? getFilteredItems(defaultDatabase.merged, keywordList)
        : defaultDatabase.merged
    setDatabase(filteredDatabase)
    setCount(filteredDatabase.length)
    setCurrentPage(1)
    if (keywordList.length > 0) {
      handleUpdateSearchRoute(keywordList)
    } else {
      handleResetFilter()
    }
    setKeywords(keywordList)
  }

  const handlePaginate = (page: number) => {
    setCount(currentDatabase.length)
    const currentPageItems = currentDatabase.filter(
      (_, index) => index >= (page - 1) * perPage && index < page * perPage
    )
    setCurrentPage(page)
    setDataPerPage(currentPageItems)
  }

  const handleSort = (item: string | null) => {
    if (item) {
      const [value, order] = item.split(':')
      const sortedDatabase = getSortedItems(currentDatabase, value, order)
      setDatabase(sortedDatabase)
    } else {
      const filteredDatabase =
        keywords.length > 0
          ? getFilteredItems(defaultDatabase.merged, keywords)
          : defaultDatabase.merged
      setDatabase(filteredDatabase)
    }
    setSortValue(item)
    handlePaginate(1)
  }

  const handleChangeTab = (type: string) => {
    setDatabaseType(type)
    setCurrentPage(1)
    handleUpdateDatabaseRoute(type)
  }

  return (
    <Layout title="データリスト">
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <div css={containerStyle}>
          <h1 css={titleStyle}>データリスト</h1>
          <SearchForm keywords={keywords} onChangeKeyword={onChangeKeyword} />
          <div css={tabContainerStyle}>
            <ul css={tabStyle}>
              <li css={databaseType === 'sip' ? tabItemCurrentStyle : tabItemStyle}>
                <button css={buttonStyle} onClick={() => handleChangeTab('sip')}>SIP</button>
              </li>
              <li css={databaseType === 'integbio' ? tabItemCurrentStyle : tabItemStyle}>
                <button css={buttonStyle} onClick={() => handleChangeTab('integbio')}>
                  Integbio
                </button>
              </li>
            </ul>
          </div>
          <div css={functionUiContainerStyle}>
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
        </div>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataIndex
