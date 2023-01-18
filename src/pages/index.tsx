import Link from 'next/link'

import HomeItem from '@/components/Elements/HomeItem'
import DefaultLayout from '@/components/Layout/DefaultLayout'

const Home = () => {
  return (
    <>
      <DefaultLayout title="home">
        <p>
          「スマートバイオ産業・農業基盤技術」の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。
        </p>
        <HomeItem
          title="データ連携ポータルについて"
          text={
            <>
              <Link href="#">戦略的イノベーション創造プログラム</Link>（SIP）
              <Link href="#">第2期「スマートバイオ産業・農業基盤技術」</Link>
              の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。未公開のデータであっても、それがどのようなデータか、どのような研究から生み出されたものかを公表することにより、将来的な利活用に結び付けたいと考えています。
            </>
          }
        />
        <HomeItem
          title="データリストについて"
          text={
            <>
              SIP「スマートバイオ産業・農業基盤技術」の各プロジェクト由来のデータベースに加え、
              <a href="">Integbioデータベースカタログ</a>
              に掲載されているデータベースのメタデータが一覧できます。リスト内の情報を検索することにより、SIPデータとSIP以外で公開されているデータから、興味あるデータを絞り込んで表示することが可能です。
            </>
          }
          item={
            <button>
              <Link href="data">詳しく見る</Link>
            </button>
          }
        />
        <HomeItem
          title="SIP BioDB Searchについて"
          text="酵素反応データを中心として複数のデータを繋いだ検索用ウェブツールです。化合物名・酵素名・ GO(Gene Ontology)・生物種・EC(Enzyme Commission)番号をキーとして検索すると、関連する反応・化合物・酵素・生物種情報が表示されます。"
          item={
            <button>
              <Link href="data">ツールを使う</Link>
            </button>
          }
        />
        <HomeItem
          title="スマートバイオ産業・農業基盤技術について"
          text="我が国のバイオエコノミーの拡大と関連産業の競争力強化等のため、府省連携により、バイオとデジタルの融合によるイノベーションの基盤を構築し、「食」による健康増進社会の実現や革新的なバイオ素材・製品産業の振興・創出を図ります。
            また、「食」を生産する農業にあっては、生産から加工・流通・販売・消費・輸出までデータを相互活用するスマートフードチェーンの構築や様々なデータにより駆動する革新的なスマート農業技術・システムの開発、データ駆動型育種を推進するための技術開発等を実施します。基礎研究から実用化・事業化まで一気通貫の取組を通じ、持続可能な成長社会の実現や農林水産業・食品産業の生産性革命・競争力強化を目指します。"
          item={
            <>
              <p>imageが入りますよ</p>
              <p>
                https://www.naro.go.jp/laboratory/brain/sip/sip2/theme/index.htmより引用
              </p>
            </>
          }
        />
        <HomeItem
          title="戦略的イノベーション創造プログラムについて"
          text="戦略的イノベーション創造プログラム（SIP）は、総合科学技術・イノベーション会議が司令塔機能を発揮し、府省の枠を超え、基礎研究から実用化・事業化まで一気通貫で研究開発を推進し、イノベーションの実現を目指すプログラムです。"
          item={
            <button>
              <a href="">サイトを見る</a>
            </button>
          }
        />
      </DefaultLayout>
    </>
  )
}

export default Home
