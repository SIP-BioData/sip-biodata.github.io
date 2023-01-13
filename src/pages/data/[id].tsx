import { useRouter } from 'next/router'

import DefaultLayout from '@/components/Layout/DefaultLayout'

const DataDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <DefaultLayout title="データ詳細">
      データ詳細
      <p>ID: {id}</p>
    </DefaultLayout>
  )
}

export default DataDetail
