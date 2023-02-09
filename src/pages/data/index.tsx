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
  const [keyword, setKeyword] = useState('')
  const [database, setDatabase] = useState<Array<Item>>([])

  useEffect(() => {
    setDatabase(props.sipDatabase)
  }, [props.sipDatabase])

  const onChangeKeyword = (value: string) => {
    const filteredDatabase = database.filter((item) =>
      Object.values(item).find((v) => (v != null ? v.includes(value) : false))
    )
    setDatabase(filteredDatabase)
    setKeyword(value)
  }

  return (
    <Layout title={props.title}>
      <LowerPageLayout>
        <Breadcrumbs childTitle={props.title} />
        <section css={style}>
          <SearchForm value={keyword} onChangeKeyword={onChangeKeyword} />
          <h2>{props.title}</h2>
          <div css={flexStyleAll}>
            <section css={flexStyleLeft}>
              <Records num={2000} />
              <Pagination first_num={1} last_num={33} />
            </section>
            <SelectBox />
          </div>
          {database.map((item, index) => (
            <DatabaseItem key={index} item={item} />
          ))}
        </section>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataIndex

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), './data/sip_database.json')

  const data = await fsPromises.readFile(filePath)
  const objectData = JSON.parse(data.toString())

  return {
    props: {
      sipDatabase: objectData,
    },
  }
}
