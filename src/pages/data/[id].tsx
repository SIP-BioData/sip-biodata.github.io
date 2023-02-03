import { css } from '@emotion/react'
import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import Button from '@/components/Elements/Button'
import DetailItem from '@/components/Elements/DetailItem'
import ListItem from '@/components/Elements/ListItem'
import LowerPageLayout from '@/components/Elements/LowerPageLayout'
import DefaultLayout from '@/components/Layout/DefaultLayout'

type Props = {
  title?: string
  path?: string
  childTitle?: string
}

const buttonStyle = css`
  margin: 50px auto 0;
  text-align: center;
`

const DataDetail = ({
  title = 'データリスト',
  childTitle = '花卉ゲノム・転写産物解析データ／ 精密ゲノム編集',
}: Props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <DefaultLayout title="データ詳細">
      {/*データ詳細*/}
      {/*<p>ID: {id}</p>*/}
      <LowerPageLayout>
        <Breadcrumbs title={title} path="data" childTitle={childTitle} />
        <DetailItem>
          <h2>{childTitle}</h2>
          <ListItem
            group="精密ゲノム編集"
            data="花卉ゲノム・転写産物解析データ"
            content="シクラメン（品集 Wine Red）の全ゲノム配列データ"
            storage="RDFポータル"
            dataForm="RDF"
            provider="小野道之"
            admin="筑波大学"
            publicPrivate="原則的にはプロジェクト終了時に公開。しかし、協力する企業等の意向も反映する。"
            accessLevel="グループ内共有データ。データ利用制限としてはグループ内共有データとする。本プロジェクトの目的によるグループ内の利用に関しては、情報共有の上、特に制限を設けない。"
            database="-"
            reference="-"
          />
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
        </DetailItem>
      </LowerPageLayout>
    </DefaultLayout>
  )
}

export default DataDetail
