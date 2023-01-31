import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import DetailItem from '@/components/Elements/DetailItem'
import ListItem from '@/components/Elements/ListItem'
import LowerPageLayout from '@/components/Elements/LowerPageLayout'
import DefaultLayout from '@/components/Layout/DefaultLayout'

type Props = {
  title?: string
  childTitle?: string
}

const DataDetail = ({
  title = 'データリスト',
  childTitle = '花卉ゲノム・転写産物解析データ／ 精密ゲノム編集',
}: Props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <DefaultLayout title="データ詳細">
      データ詳細
      <p>ID: {id}</p>
      <LowerPageLayout>
        <Breadcrumbs title={title} childTitle={childTitle} />
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
          <div>
            <button>データリストに戻る</button>
            <button>研究グループに戻る</button>
          </div>
        </DetailItem>
      </LowerPageLayout>
    </DefaultLayout>
  )
}

export default DataDetail
