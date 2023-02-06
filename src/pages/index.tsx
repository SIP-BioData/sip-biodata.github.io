import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Elements/Button'
import HomeItem from '@/components/Elements/HomeItem'
import DefaultLayout from '@/components/Layout/DefaultLayout'

import aboutImg from '../../public/aboutImg.png'
import bgImg from '../../public/bgImg.png'
import mainImg from '../../public/bgMain.png'

const mainImgStyle = css`
  width: 100vw;
  height: auto;
`

const readStyle = css`
  max-width: var(--w875);
  width: 100%;
  color: var(--col-wh);
  font-size: 28px;
  font-weight: 500;
  line-height: calc(52 / 28);
  position: absolute;
  top: 394px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

const bgLayoutStyle = css`
  position: relative;
`

const bgStyle = css`
  width: 100vw;
  object-fit: cover;
  object-position: 100% 100%;
`

const itemStyle = css`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: var(--col-wh);
`

const btnStyle = css`
  background-color: var(--col-wh);
  a {
    color: var(--col-bk);
  }
`

const imgStyle = css`
  max-width: var(--w875);
  width: calc(100% - 20px);
  margin: 60px auto 0;
`

const imginnStyle = css`
  background-color: var(--col-wh);
  margin: 60px auto 0;
  padding: 18px 22px;
  border-radius: 10px;
`

const quotationStyle = css`
  font-size: 16px;
  margin: 16px 0 0;
`

const Home = () => {
  return (
    <DefaultLayout title="home">
      <div>
        <Image css={mainImgStyle} src={mainImg} alt="" width={500} />
      </div>
      <p css={readStyle}>
        「スマートバイオ産業・農業基盤技術」の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。
      </p>
      <HomeItem
        title="データ連携ポータルについて"
        text={
          <>
            <Link href="#">戦略的イノベーション創造プログラム</Link>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.8,14.8H9.2V8.4L6.4,11.2,5.264,10.064,10,5.328l4.736,4.736L13.6,11.2,10.8,8.4v6.4M10,2a8,8,0,1,1-8,8,8,8,0,0,1,8-8m0,1.6A6.4,6.4,0,1,0,16.4,10,6.4,6.4,0,0,0,10,3.6Z"
                transform="translate(18 18) rotate(180)"
                fill="#000118"
              />
            </svg>
            （SIP）
            <Link href="#">第2期「スマートバイオ産業・農業基盤技術」</Link>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.8,14.8H9.2V8.4L6.4,11.2,5.264,10.064,10,5.328l4.736,4.736L13.6,11.2,10.8,8.4v6.4M10,2a8,8,0,1,1-8,8,8,8,0,0,1,8-8m0,1.6A6.4,6.4,0,1,0,16.4,10,6.4,6.4,0,0,0,10,3.6Z"
                transform="translate(18 18) rotate(180)"
                fill="#000118"
              />
            </svg>
            の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。未公開のデータであっても、それがどのようなデータか、どのような研究から生み出されたものかを公表することにより、将来的な利活用に結び付けたいと考えています。
          </>
        }
      />
      <section css={bgLayoutStyle}>
        <div>
          <Image css={bgStyle} src={bgImg} alt="" height={546} />
        </div>
        <section css={itemStyle}>
          <HomeItem
            title="データリストについて"
            text={
              <>
                SIP「スマートバイオ産業・農業基盤技術」の各プロジェクト由来のデータベースに加え、
                <a href="">Integbioデータベースカタログ</a>{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.778,3V4.778h3.191L7.231,13.516l1.253,1.253,8.738-8.738V9.222H19V3M17.222,17.222H4.778V4.778H11V3H4.778A1.777,1.777,0,0,0,3,4.778V17.222A1.778,1.778,0,0,0,4.778,19H17.222A1.778,1.778,0,0,0,19,17.222V11H17.222Z"
                    transform="translate(-3 -3)"
                    fill="#fff"
                  />
                </svg>{' '}
                に掲載されているデータベースのメタデータが一覧できます。リスト内の情報を検索することにより、SIPデータとSIP以外で公開されているデータから、興味あるデータを絞り込んで表示することが可能です。
              </>
            }
            item={
              <Button
                css={btnStyle}
                slug="data"
                text="詳しく見る"
                iconRight={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M10.8,14.8H9.2V8.4L6.4,11.2,5.264,10.064,10,5.328l4.736,4.736L13.6,11.2,10.8,8.4v6.4M10,2a8,8,0,1,1-8,8,8,8,0,0,1,8-8m0,1.6A6.4,6.4,0,1,0,16.4,10,6.4,6.4,0,0,0,10,3.6Z"
                      transform="translate(18 18) rotate(180)"
                      fill="#000118"
                    />
                  </svg>
                }
              />
            }
          />
        </section>
      </section>
      <section>
        <HomeItem
          title="SIP BioDB Searchについて"
          text="酵素反応データを中心として複数のデータを繋いだ検索用ウェブツールです。化合物名・酵素名・ GO(Gene Ontology)・生物種・EC(Enzyme Commission)番号をキーとして検索すると、関連する反応・化合物・酵素・生物種情報が表示されます。"
          item={
            <Button
              slug=""
              text="ツールを使う"
              iconRight={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.778,3V4.778h3.191L7.231,13.516l1.253,1.253,8.738-8.738V9.222H19V3M17.222,17.222H4.778V4.778H11V3H4.778A1.777,1.777,0,0,0,3,4.778V17.222A1.778,1.778,0,0,0,4.778,19H17.222A1.778,1.778,0,0,0,19,17.222V11H17.222Z"
                    transform="translate(-3 -3)"
                    fill="#fff"
                  />
                </svg>
              }
            />
          }
        />
      </section>
      <section css={bgLayoutStyle}>
        <div>
          <Image css={bgStyle} src={bgImg} alt="" height={1410} />
        </div>
        <section css={itemStyle}>
          <HomeItem
            title="スマートバイオ産業・農業基盤技術について"
            text="我が国のバイオエコノミーの拡大と関連産業の競争力強化等のため、府省連携により、バイオとデジタルの融合によるイノベーションの基盤を構築し、「食」による健康増進社会の実現や革新的なバイオ素材・製品産業の振興・創出を図ります。
          また、「食」を生産する農業にあっては、生産から加工・流通・販売・消費・輸出までデータを相互活用するスマートフードチェーンの構築や様々なデータにより駆動する革新的なスマート農業技術・システムの開発、データ駆動型育種を推進するための技術開発等を実施します。基礎研究から実用化・事業化まで一気通貫の取組を通じ、持続可能な成長社会の実現や農林水産業・食品産業の生産性革命・競争力強化を目指します。"
            item={
              <div css={imgStyle}>
                <div css={imginnStyle}>
                  <Image
                    src={aboutImg}
                    alt="スマートバイオ産業・農業基盤技術についての画像"
                    max-width={830}
                    layout={'responsive'}
                  />
                </div>
                <div css={quotationStyle}>
                  https://www.naro.go.jp/laboratory/brain/sip/sip2/theme/index.htmより引用
                </div>
              </div>
            }
          />
        </section>
      </section>
      <HomeItem
        title="戦略的イノベーション創造プログラムについて"
        text="戦略的イノベーション創造プログラム（SIP）は、総合科学技術・イノベーション会議が司令塔機能を発揮し、府省の枠を超え、基礎研究から実用化・事業化まで一気通貫で研究開発を推進し、イノベーションの実現を目指すプログラムです。"
        item={
          <Button
            slug=""
            text="サイトをみる"
            iconRight={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.778,3V4.778h3.191L7.231,13.516l1.253,1.253,8.738-8.738V9.222H19V3M17.222,17.222H4.778V4.778H11V3H4.778A1.777,1.777,0,0,0,3,4.778V17.222A1.778,1.778,0,0,0,4.778,19H17.222A1.778,1.778,0,0,0,19,17.222V11H17.222Z"
                  transform="translate(-3 -3)"
                  fill="#fff"
                />
              </svg>
            }
          />
        }
      />
    </DefaultLayout>
  )
}

export default Home
