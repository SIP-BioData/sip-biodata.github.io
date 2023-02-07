import Image from 'next/image'
import { useRouter } from 'next/router'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import DetailItem from '@/components/Elements/DetailItem'
import GroupDetailItem from '@/components/Elements/GroupDetailItem'
import GroupDetailList from '@/components/Elements/GroupDetailList'
import LowerPageLayout from '@/components/Elements/LowerPageLayout'
import Layout from '@/components/Layout/Layout'

import groupImg01 from '../../../public/groupImg01.png'
import groupImg02 from '../../../public/groupImg02.png'

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
    <Layout title={title}>
      {/*研究グループ詳細*/}
      {/*<p>ID: {id}</p>*/}
      <LowerPageLayout>
        <Breadcrumbs title={title} childTitle={childTitle} />
        <DetailItem>
          <h2>
            <span>研究グループ：</span>
            <span>{childTitle}</span>
          </h2>
          <GroupDetailItem
            text={
              <p>
                遺伝子を設計通りに精密に書き換えられるゲノム編集技術を開発しています。すでに、1塩基のみを目印としてターゲットを認識する技術、 DNAフリーのゲノム編集技術を開発しています(下図)。
                また、Webサイト「バイオステーション」を通じて、ゲノム編集等のバイオテクノロジーに関する最新情報を発信しています。
              </p>
            }
            url="https://www.naro.go.jp/laboratory/brain/sip/sip2/theme/theme2102.html#t02"
            icon={
              <svg
                  fill="#0068d0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
              >
                <path
                    className="st0"
                    d="M9.8,0v1.8H13l-8.7,8.7l1.3,1.3L14.2,3v3.2H16V0 M14.2,14.2H1.8V1.8H8V0H1.8C0.8,0,0,0.8,0,1.8c0,0,0,0,0,0
v12.4c0,1,0.8,1.8,1.8,1.8h12.4c1,0,1.8-0.8,1.8-1.8V8h-1.8V14.2z"
                />
              </svg>            }
          />
          <GroupDetailItem
            subtitle="ゲノム編集を精密化する成果"
            text={
            <p>
              C(シトシン)1塩基のみを目印にゲノム編集のターゲットを認識できるCas9改変体を開発<br />
              G(グアニン)についても1塩基で認識可能なCas9を開発済のため、A(アデニン)とT(チアミン)についても同様のCas9を開発すること
            </p>
            }
            item={
              <>
                <Image src={groupImg01} alt="" />
              </>
            }
          />
          <GroupDetailItem
            subtitle="ウイルスベクターを用いたDNAフリーのゲノム編集技術を開発"
            text={
              <p>
                接種したウイルスによりゲノム編集酵素を生産することで、植物に外来のDNAを組み込むことなくゲノム編集を実現
              </p>
            }
            item={
              <>
                <Image src={groupImg02} alt="" />
              </>
            }
          />
          <GroupDetailItem
              subtitle="データ一覧"
              item={
                <GroupDetailList
                    group="精密ゲノム編集"
                    url=""
                    data="花卉ゲノム・転写産物解析データ"
                    target="花卉"
                    provider="小野道之"
                    accessLevel="グループ内共有"
                 />
              }
          />
        </DetailItem>

      </LowerPageLayout>
    </Layout>
  )
}

export default GroupDetail
