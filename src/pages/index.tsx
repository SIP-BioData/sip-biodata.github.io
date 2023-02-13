import { css } from '@emotion/react'
import Image from 'next/image'

import HomeItem from '@/components/Elements/HomeItem'
import LinkButton from '@/components/Elements/LinkButton'
import Layout from '@/components/Layout/Layout'

import aboutImg from '../../public/aboutImg.png'
import arrowForwardBk from '../../public/arrowForwardBk.svg'
import linkEX from '../../public/linkEX.svg'

const firstViewStyle = css`
  padding: 300px 24px 230px;
  background-image: url('/bgMain.png');
  background-size: cover;
`

const readStyle = css`
  max-width: var(--w875);
  color: var(--col-wh);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.9;
  margin: 0 auto;
`

const linkStyle = css`
  text-decoration: underline;
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: var(--col-bk);
    mask: var(--link-icon-url) no-repeat;
    vertical-align: middle;
    margin: 0 8px;
  }
`

const invertedColorLinkStyle = css`
  ${linkStyle};
  &::after {
    background-color: var(--col-wh);
  }
`

const buttonContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const itemWithBgImgStyle = css`
  padding: 0 24px;
  background-image: url('/bgImg.png');
  background-size: cover;
  color: var(--col-wh);
`

const imgStyle = css`
  max-width: var(--w875);
  margin: 60px auto 0;
`

const imgInnerStyle = css`
  background-color: var(--col-wh);
  margin: 60px auto 0;
  padding: 18px 22px;
  border-radius: 10px;
`

const quotationStyle = css`
  margin: 16px 0 0;
`

const Home = () => {
  return (
    <Layout>
      <div css={firstViewStyle}>
        <p css={readStyle}>
          「スマートバイオ産業・農業基盤技術」の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。
        </p>
      </div>
      <HomeItem>
        <h2>データ連携ポータルについて</h2>
        <p>
          <a css={linkStyle} href="#" target="_blank" rel="noreferrer">
            戦略的イノベーション創造プログラム
          </a>
          （SIP）
          <a css={linkStyle} href="#" target="_blank" rel="noreferrer">
            第2期「スマートバイオ産業・農業基盤技術」
          </a>
          の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。未公開のデータであっても、それがどのようなデータか、どのような研究から生み出されたものかを公表することにより、将来的な利活用に結び付けたいと考えています。
        </p>
      </HomeItem>
      <div css={itemWithBgImgStyle}>
        <HomeItem>
          <h2>データリストについて</h2>
          <p>
            SIP「スマートバイオ産業・農業基盤技術」の各プロジェクト由来のデータベースに加え、
            <a
              css={invertedColorLinkStyle}
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Integbioデータベースカタログ
            </a>
            に掲載されているデータベースのメタデータが一覧できます。リスト内の情報を検索することにより、SIPデータとSIP以外で公開されているデータから、興味あるデータを絞り込んで表示することが可能です。
          </p>
          <div css={buttonContainerStyle}>
            <LinkButton path="/data" rightIcon={arrowForwardBk} invert={true}>
              詳しく見る
            </LinkButton>
          </div>
        </HomeItem>
      </div>
      <HomeItem>
        <h2>SIP BioDB Searchについて</h2>
        <p>
          酵素反応データを中心として複数のデータを繋いだ検索用ウェブツールです。化合物名・酵素名・
          GO(Gene Ontology)・生物種・EC(Enzyme
          Commission)番号をキーとして検索すると、関連する反応・化合物・酵素・生物種情報が表示されます。
        </p>
        <div css={buttonContainerStyle}>
          <LinkButton path="https://" rightIcon={linkEX}>
            ツールを使う
          </LinkButton>
        </div>
      </HomeItem>
      <div css={itemWithBgImgStyle}>
        <HomeItem>
          <h2>スマートバイオ産業・農業基盤技術について</h2>
          <p>
            我が国のバイオエコノミーの拡大と関連産業の競争力強化等のため、府省連携により、バイオとデジタルの融合によるイノベーションの基盤を構築し、「食」による健康増進社会の実現や革新的なバイオ素材・製品産業の振興・創出を図ります。
            また、「食」を生産する農業にあっては、生産から加工・流通・販売・消費・輸出までデータを相互活用するスマートフードチェーンの構築や様々なデータにより駆動する革新的なスマート農業技術・システムの開発、データ駆動型育種を推進するための技術開発等を実施します。基礎研究から実用化・事業化まで一気通貫の取組を通じ、持続可能な成長社会の実現や農林水産業・食品産業の生産性革命・競争力強化を目指します。
          </p>
          <div css={imgStyle}>
            <div css={imgInnerStyle}>
              <Image
                src={aboutImg}
                alt="スマートバイオ産業・農業基盤技術についての画像"
                max-width={830}
              />
            </div>
            <div css={quotationStyle}>
              https://www.naro.go.jp/laboratory/brain/sip/sip2/theme/index.htmより引用
            </div>
          </div>
        </HomeItem>
      </div>
      <HomeItem>
        <h2>戦略的イノベーション創造プログラムについて</h2>
        <p>
          戦略的イノベーション創造プログラム（SIP）は、総合科学技術・イノベーション会議が司令塔機能を発揮し、府省の枠を超え、基礎研究から実用化・事業化まで一気通貫で研究開発を推進し、イノベーションの実現を目指すプログラムです。
        </p>
        <div css={buttonContainerStyle}>
          <LinkButton path="https://" rightIcon={linkEX}>
            サイトをみる
          </LinkButton>
        </div>
      </HomeItem>
    </Layout>
  )
}

export default Home
