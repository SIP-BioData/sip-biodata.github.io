import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import DetailItem from '@/components/Elements/DetailItem'
import LowerPageLayout from '@/components/Elements/LowerPageLayout'
import DefaultLayout from '@/components/Layout/DefaultLayout'

type Props = {
  title?: string
  childTitle?: string
}

const GroupDetail = ({
  title = '研究グループ',
  childTitle = '精密ゲノム編集',
}: Props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <DefaultLayout title={title}>
      研究グループ詳細
      <p>ID: {id}</p>
      <LowerPageLayout>
        <Breadcrumbs title={title} childTitle={childTitle} />
        <DetailItem>
          <h2>
            <span>研究グループ：</span>
            {childTitle}
          </h2>
        </DetailItem>
      </LowerPageLayout>
    </DefaultLayout>
  )
}

export default GroupDetail
