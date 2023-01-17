import { useRouter } from 'next/router'

import DefaultLayout from '@/components/Layout/DefaultLayout'

const DataDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <DefaultLayout title="データ詳細">
      データ詳細
      <p>ID: {id}</p>
      <ul>
        <li>HOME</li>
        <li>データリスト</li>
        <li>花卉ゲノム・転写産物解析データ／精密ゲノム編集</li>
      </ul>
      <h2>花卉ゲノム・転写産物解析データ／精密ゲノム編集</h2>
      <section>
        <table>
          <tbody>
            <tr>
              <td>研究グループ</td>
              <td>精密ゲノム編集</td>
            </tr>
            <tr>
              <td>データ</td>
              <td>花卉ゲノム・転写産物解析データ</td>
            </tr>
            <tr>
              <td>格納されるデータの内容</td>
              <td>RDFポータル</td>
            </tr>
            <tr>
              <td>データ形式</td>
              <td>RDF</td>v
            </tr>
            <tr>
              <td>提供者</td>
              <td>小野道之</td>
            </tr>
            <tr>
              <td>データ管理者</td>
              <td>筑波大学</td>
            </tr>
            <tr>
              <td>公開（公開日）・非公開</td>
              <td>
                原則的にはプロジェクト終了時に公開。しかし、協力する企業等の意向も反映する。
              </td>
            </tr>
            <tr>
              <td>アクセスレベル（利用条件）</td>
              <td>
                グループ内共有データ。データ利用制限としてはグループ内共有データとする。本プロジェクトの目的によるグループ内の利用に関しては、情報共有の上、特に制限を設けない。
              </td>
            </tr>
            <tr>
              <td>連携可能なデータベース</td>
              <td>-</td>
            </tr>
            <tr>
              <td>参考</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <button>データリストに戻る</button>
        <button>研究グループに戻る</button>
      </section>
    </DefaultLayout>
  )
}

export default DataDetail
