import {css} from "@emotion/react";
import Image from "next/image";
import Link from 'next/link'

import HomeItem from '@/components/Elements/HomeItem'
import DefaultLayout from '@/components/Layout/DefaultLayout'

import aboutImg from '../../public/aboutImg.png'


const readStyle = css`
    max-width: var(--w875);
    margin: 304px auto 234px;
`

const btnStyle = css`
  display: flex;
  align-items: center;
  svg { 
    width: 14px;
    height: 14px;
    margin-left: 8px;
  }   
`

const imgStyle = css`
  max-width: var(--w875);
  width: calc(100% - 20px);
  background-color: var(--col-wh);
  margin: 60px 0 0;
  padding: 18px 22px;
  border-radius: 10px;
`

const txtStyle = css`
  font-size: 16px;
  margin: 16px 0 0;  
`

const Home = () => {
  return (
    <>
      <DefaultLayout title="home">
        <p css={readStyle}>
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
            <button css={btnStyle}>
              <Link href="data">ツールを使う</Link>
              <svg css={css`fill: #fff;`} xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 16 16">
                <path className="st0" d="M9.8,0v1.8H13l-8.7,8.7l1.3,1.3L14.2,3v3.2H16V0 M14.2,14.2H1.8V1.8H8V0H1.8C0.8,0,0,0.8,0,1.8c0,0,0,0,0,0
	v12.4c0,1,0.8,1.8,1.8,1.8h12.4c1,0,1.8-0.8,1.8-1.8V8h-1.8V14.2z"/>
              </svg>
            </button>
          }
        />
        <HomeItem
          title="スマートバイオ産業・農業基盤技術について"
          text="我が国のバイオエコノミーの拡大と関連産業の競争力強化等のため、府省連携により、バイオとデジタルの融合によるイノベーションの基盤を構築し、「食」による健康増進社会の実現や革新的なバイオ素材・製品産業の振興・創出を図ります。
            また、「食」を生産する農業にあっては、生産から加工・流通・販売・消費・輸出までデータを相互活用するスマートフードチェーンの構築や様々なデータにより駆動する革新的なスマート農業技術・システムの開発、データ駆動型育種を推進するための技術開発等を実施します。基礎研究から実用化・事業化まで一気通貫の取組を通じ、持続可能な成長社会の実現や農林水産業・食品産業の生産性革命・競争力強化を目指します。"
          item={
            <>
              <div css={imgStyle}>
                <Image
                    src={aboutImg}
                    alt="スマートバイオ産業・農業基盤技術についての画像"
                    max-width={830} layout={'responsive'}
                />
              </div>
              <p css={txtStyle}>
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
