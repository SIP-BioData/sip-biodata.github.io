import { css } from '@emotion/react'

// import Image from "next/image";
import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import GroupItem from '@/components/Elements/GroupItem'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import Pagenation from '@/components/Elements/Pagination'
import Records from '@/components/Elements/Records'
import SearchForm from '@/components/Elements/SearchForm'
import SelectBox from '@/components/Elements/SelectBox'
import Layout from '@/components/Layout/Layout'

type Props = {
  title?: string
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

const DataIndex = ({ title = 'データリスト' }: Props) => {
  return (
    <Layout title={title}>
      <LowerPageLayout>
        <Breadcrumbs childTitle={title} />
        <section css={style}>
          <SearchForm />
          <h2>{title}</h2>
          <div css={flexStyleAll}>
            <section css={flexStyleLeft}>
              <Records num={2000} />
              <Pagenation first_num={1} last_num={33} />
            </section>
            <SelectBox />
          </div>
          <GroupItem
            group="精密ゲノム編集"
            data="蛋白質構造データ"
            target="-"
            provider="濡木理"
            accessLevel="公開可能データ"
            content="BlCas9-RNA-DNA 複合体の結晶構造解析データ"
            storage="PDB"
            dataForm="RDF"
            admin="東京大学"
            publicPrivate="論文掲載後"
            database={
              <>
                ウンシュウゲノムDB
                <br />
                カンキツ品種多型TASUKE
              </>
            }
            reference="特許出願（特願2020-512343）"
          />
          <GroupItem
            group="農業環境エンジニアリングシステム"
            data="農業環境エンジニアリングシステムメタデータ"
            target="ダイズ/コマツナ"
            provider="桝屋啓志"
            accessLevel="公開（CC BY）"
            content="{}"
            storage="{}"
            dataForm="{}"
            admin="{}"
            publicPrivate="{}"
            database="{}"
            reference="{}"
          />
        </section>
      </LowerPageLayout>
    </Layout>
  )
}

export default DataIndex
