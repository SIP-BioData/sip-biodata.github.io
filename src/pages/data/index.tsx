import { css } from '@emotion/react'

import Breadcrumbs from '@/components/Elements/Breadcrumbs'
import DefaultLayout from '@/components/Layout/DefaultLayout'

// import Link from 'next/link'
import serchImg from '../../../public/iconSearch.svg'

type Props = {
  title?: string
}

const layout = css`
  max-width: var(--conts-inn);
  margin: 0 auto;
`

const boxLayout = css`
  background-color: var(--col-wh);
  margin-top: 26px;
  padding: 60px;
  
  form { 
    max-width: 100%;
    box-sizing: border-box;
    border: var(--border-form);
    border-radius: 4px;
    line-height: 48px;
    input {
      padding: 0;
      border: none;
      border-radius: 0;
      outline: none;
      background: none;
    }
  }
  h2 {
    margin-top: 48px;
  }
`

const flexstyle = css`
  display: flex;
  margin-top: 44px;
  ul {
    display: flex;
    margin-left: 28px;
    
  }
`

const txtStyle = css`
  font-size: 14px;
`

const listStyle =css`
  margin-top: 32px;
  padding: 28px;
  border: 1px solid #707070;

`

const DataIndex = ({ title = 'データリスト' }: Props) => {
  return (
    <>
      <DefaultLayout title="{title}">
        <article css={layout}>
          <Breadcrumbs title="データリスト"/>
          <section css={boxLayout}>
            <div>
              {/*<Image src={serchImg} alt="検索"/>*/}
              <form action="" method="get">
                <input type="search" name="search" placeholder="キーワードで検索"/>
              </form>
            </div>
            <h2>{title}</h2>
            <div css={flexstyle}>
              <section css={flexstyle}>
                <p css={txtStyle}>2000 records</p>
                <ul>
                  <li>＜</li>
                  <li>1</li>
                  <li>ー</li>
                  <li>33</li>
                  <li>＞</li>
                </ul>
              </section>
              <section css={flexstyle}>
                <label>並び順：</label>
                <select name="data" id="data-select">
                  <option value="">関連性</option>
                  <option value="">その１</option>
                  <option value="">その２</option>
                </select>
              </section>
            </div>
            <section css={listStyle}>
              <dl>
                <dt>研究グループ</dt>
                <dd>精密ゲノム編集</dd>
                <dt>データ</dt>
                <dd>蛋白質構造データ</dd>
                <dt>対象</dt>
                <dd>-</dd>
                <dt>提供者</dt>
                <dd>濡木理</dd>
                <dt>アクセスレベル</dt>
                <dd>公開可能データ</dd>
              </dl>
              <dl>
                <dt>格納されるデータの内容</dt>
                <dd>BlCas9-RNA-DNA 複合体の結晶構造解析データ</dd>
              </dl>
              <dl>
                <dt>データベース・データ格納場所</dt>
                <dd>PDB</dd>
              </dl>
              <dl>
                <dt>データ形式</dt>
                <dd>RDF</dd>
              </dl>
              <dl>
                <dt>データ管理者</dt>
                <dd>東京大学</dd>
              </dl>
              <dl>
                <dt>公開（公開日）・非公開</dt>
                <dd>論文掲載後</dd>
              </dl>
              <dl>
                <dt>連携可能なデータベース</dt>
                <dd>
                  ウンシュウゲノムDB
                  <br/>
                  カンキツ品種多型TASUKE
                </dd>
              </dl>
              <dl>
                <dt>参考</dt>
                <dd>特許出願（特願2020-512343）</dd>
              </dl>
              <button>表示内容を減らす</button>
            </section>
          </section>
        </article>
      </DefaultLayout>
    </>
  )
}

export default DataIndex
