import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

import DatabaseItem from '@/components/Elements/DatabaseItem'
import SearchForm from '@/components/Elements/SearchForm'
import SelectBox from '@/components/Elements/SelectBox'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import Pagination from '@/components/Navigation/Pagination'
import Tab from '@/components/Navigation/Tab'
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
  hiddenGroup: string[]
}

type CountType = {
  sip: number
  integbio: number
  all: number
}

type DatabaseType = {
  sip: Item[]
  integbio: Item[]
  all: Item[]
}

const breadcrumbs = [
  {
    label: 'データリスト',
  },
]

const mq = {
  mini: '@media (max-width: 600px)',
}

const containerStyle = css`
  flex: 1 1 100%;
  background-color: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
  ${mq.mini} {
    padding: 60px 16px;
  }
`

const marginStyle = css`
  margin-bottom: 48px;
`

const linkStyle = css`
  text-decoration: underline;
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: var(--col-bk);
    mask: var(--link-icon-url) no-repeat;
    vertical-align: middle;
    margin: 0 8px;
  }
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
  const [counts, setCounts] = useState<CountType>({
    sip: 0,
    integbio: 0,
    all: 0,
  })
  const [keywords, setKeywords] = useState<Array<string>>([])
  const [database, setDatabase] = useState<DatabaseType>({
    sip: [],
    integbio: [],
    all: [],
  })
  const [currentDatabase, setCurrentDatabase] = useState<Array<Item>>([])
  const [dataPerPage, setDataPerPage] = useState<Array<Item>>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortValue, setSortValue] = useState<string | null>(null)
  const [databaseType, setDatabaseType] = useState<string>('')
  const perPage = 20
  const defaultDatabase = {
    sip: props.sipDatabase,
    integbio: props.integbioDatabase,
    all: [...props.sipDatabase, ...props.integbioDatabase],
  }
  const defaultCounts = {
    sip: props.sipDatabase.length,
    integbio: props.integbioDatabase.length,
    all: [...props.sipDatabase, ...props.integbioDatabase].length,
  }
  const columns = [...props.sipDatabaseColumn, ...props.integbioDatabaseColumn]
  const columnsObject = Object.assign(columns[0], columns[1])

  const sipSearchWordsQuery = useMemo(
    () => getFilteredItems(database.sip, searchWords),
    [searchWords]
  )

  const integbioSearchWordsQuery = useMemo(
    () => getFilteredItems(database.integbio, searchWords),
    [searchWords]
  )

  const allSearchWordsQuery = useMemo(
    () => getFilteredItems(database.all, searchWords),
    [searchWords]
  )

  const tabItems = [
    {
      label: `All (${counts.all})`,
      value: 'all',
    },
    {
      label: `SIP (${counts.sip})`,
      value: 'sip',
    },
    {
      label: `Integbio (${counts.integbio})`,
      value: 'integbio',
    },
  ]

  useEffect(() => {
    setDatabase(defaultDatabase)
    setCounts(defaultCounts)
    setCurrentDatabase(database.all)
    setCurrentPage(1)
  }, [props])

  useEffect(() => {
    const currentChangedDatabase =
      databaseType !== 'all'
        ? currentDatabase.filter((item) => item.type === databaseType)
        : currentDatabase
    setCurrentDatabase(currentChangedDatabase)
    setCurrentPage(1)
  }, [database, databaseType])

  useEffect(() => {
    if (currentPage === 1) {
      handlePaginate(currentPage)
    }
  }, [currentDatabase, currentPage])

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (dataType) {
      setDatabaseType(dataType)
    } else {
      setDatabaseType('all')
    }
    if (searchWords.length > 0) {
      setDatabase({
        sip: sipSearchWordsQuery,
        integbio: integbioSearchWordsQuery,
        all: allSearchWordsQuery,
      })
      setCounts({
        sip: sipSearchWordsQuery.length,
        integbio: integbioSearchWordsQuery.length,
        all: allSearchWordsQuery.length,
      })
      setKeywords(searchWords)
    }
  }, [router.query, router.isReady])

  const handleResetFilter = debounce(() => {
    if (router.isReady) {
      updateRoute(router, {}, {})
    }
  })

  const handleUpdateSearchRoute = debounce((searchWords) => {
    updateRoute(router, params, { 'search[]': searchWords })
  })

  const handleUpdateDatabaseRoute = debounce((dataType) => {
    updateRoute(router, params, { database: dataType })
  })

  const onChangeKeyword = (keywordList: string[]) => {
    const filteredDatabase = {
      sip: getFilteredItems(defaultDatabase.sip, keywordList),
      integbio: getFilteredItems(defaultDatabase.integbio, keywordList),
      all: getFilteredItems(defaultDatabase.all, keywordList),
    }
    const filteredCounts = {
      sip: filteredDatabase.sip.length,
      integbio: filteredDatabase.integbio.length,
      all: filteredDatabase.all.length,
    }
    setDatabase(keywordList.length > 0 ? filteredDatabase : defaultDatabase)
    setCounts(keywordList.length > 0 ? filteredCounts : defaultCounts)
    setCurrentPage(1)
    setSortValue(null)
    if (keywordList.length > 0) {
      handleUpdateSearchRoute(keywordList)
    } else {
      handleResetFilter()
    }
    setKeywords(keywordList)
  }

  const handlePaginate = (page: number) => {
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
      setCurrentDatabase(sortedDatabase)
    } else {
      const filteredDatabase =
        keywords.length > 0
          ? getFilteredItems(defaultDatabase.all, keywords)
          : defaultDatabase.all
      setCurrentDatabase(filteredDatabase)
    }
    setSortValue(item)
    handlePaginate(1)
  }

  const handleChangeTab = (type: string) => {
    setCurrentPage(1)
    setSortValue(null)
    handleUpdateDatabaseRoute(type)
  }

  return (
    <Layout title="データリスト">
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <div css={containerStyle}>
          <h1 css={marginStyle}>データリスト</h1>
          <p css={marginStyle}>
            SIP「スマートバイオ産業・農業基盤技術」の各プロジェクト由来のデータベースに加え、
            <a
              css={linkStyle}
              href="https://integbio.jp/dbcatalog/"
              target="_blank"
              rel="noreferrer"
            >
              Integbioデータベースカタログ
            </a>
            に掲載されているデータベースのメタデータが一覧できます。リスト内の情報を検索することにより、SIPデータとSIP以外で公開されているデータから、興味あるデータを絞り込んで表示することが可能です。
          </p>
          <SearchForm keywords={keywords} onChangeKeyword={onChangeKeyword} />
          <div css={tabContainerStyle}>
            <Tab
              items={tabItems}
              current={databaseType}
              onClickItem={handleChangeTab}
            />
          </div>
          <div
            id={`panel-${databaseType}`}
            role="tabpanel"
            aria-labelledby={`tab-${databaseType}`}
          >
            <div css={functionUiContainerStyle}>
              <Pagination
                sum={counts[databaseType as keyof CountType]}
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
                  hiddenGroup={props.hiddenGroup}
                />
              ))}
          </div>
        </div>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataIndex
