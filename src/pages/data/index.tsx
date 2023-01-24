import { css } from '@emotion/react'

// import Image from "next/image";
import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import GroupItem from "@/components/Elements/GroupItem";
import Pagenation from "@/components/Elements/Pagination";
import Records from "@/components/Elements/Records";
import SearchForm from "@/components/Elements/SearchForm";
import SelectBox from "@/components/Elements/SelectBox";
import DefaultLayout from '@/components/Layout/DefaultLayout'


type Props = {
  title?: string
}

const layout = css`
  max-width: var(--conts-inn);
  margin: 0 auto;
`

const boxLayout = css`
  background-color: var(--col-wh);
  margin-top: 26px;
  padding: 60px;
  
  
  h2 {
    margin-top: 48px;
  }
`

const flexstyle = css`
  display: flex;
  margin-top: 44px;
`


const DataIndex = ({ title = 'データリスト' }: Props) => {
  return (
    <>
      <DefaultLayout title={title}>
        <article css={layout}>
          <Breadcrumbs title={title} />
          <section css={boxLayout}>
            <SearchForm />
            <h2>{title}</h2>
            <div css={flexstyle}>
              <section css={flexstyle}>
                <Records
                    num={2000}
                />
                <Pagenation
                    first_num={1}
                    last_num={33}
                />
              </section>
              <SelectBox />
            </div>
            <GroupItem
                group="精密ゲノム編集"
                data="蛋白質構造データ"
                target="-"
                provider="濡木理"
                accesslevel="公開可能データ"
                content="BlCas9-RNA-DNA 複合体の結晶構造解析データ"
                storage="PDB"
                dataform="RDF"
                admin="東京大学"
                publicPrivate="論文掲載後"
                database={
                  <>
                    ウンシュウゲノムDB<br />
                    カンキツ品種多型TASUKE
                  </>
                }
                reference="特許出願（特願2020-512343）"
            />
          </section>
        </article>
      </DefaultLayout>
    </>
  )
}

export default DataIndex
