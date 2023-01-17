import DefaultLayout from '@/components/Layout/DefaultLayout'

const DataIndex = () => {
  return (
    <>
      <DefaultLayout title="データリスト">
        <ul>
          <li>HOME</li>
          <li>データリスト</li>
        </ul>
        <form action="" method="get">
          <input type="search" name="search" placeholder="キーワードで検索" />
        </form>
        <h2>データリスト</h2>
        <p>2000 records</p>
        <ul>
          <li>＜</li>
          <li>1</li>
          <li>ー</li>
          <li>33</li>
          <li>＞</li>
        </ul>
        <section>
          <label>並び順：</label>
          <select name="data" id="data-select">
            <option value="">関連性</option>
            <option value="">その１</option>
            <option value="">その２</option>
          </select>
        </section>
        <section>
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
              <br />
              カンキツ品種多型TASUKE
            </dd>
          </dl>
          <dl>
            <dt>参考</dt>
            <dd>特許出願（特願2020-512343）</dd>
          </dl>
          <button>表示内容を減らす</button>
        </section>
      </DefaultLayout>
    </>
  )
}

export default DataIndex
