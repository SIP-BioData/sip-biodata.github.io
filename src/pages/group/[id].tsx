import { useRouter } from 'next/router'

import DefaultLayout from '@/components/Layout/DefaultLayout'

const GroupDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <DefaultLayout title="研究グループ詳細">
      研究グループ詳細
      <p>ID: {id}</p>
    </DefaultLayout>
  )
}

export default GroupDetail
