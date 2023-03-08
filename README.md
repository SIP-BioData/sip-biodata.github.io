# SIP「スマートバイオ産業・農業基盤技術」データ連携ポータル

「スマートバイオ産業・農業基盤技術」の研究開発から生み出されたデータの利活用を目的として、どのようなデータがあるのかを国内の研究者の方々に知っていただくためのサイトです。

## Getting Started / スタートガイド

プロジェクトを複製してローカル端末で実行し、開発や検証ができるまでの手順を説明します。

### Prerequisites / 必要条件

```
Node.js >= v18.x
```

### Installing / インストール

```
$ npm install
$ npm run dev
```

[http://localhost:3000](http://localhost:3000)にアクセスしてください。

## Deployment / デプロイ

このリポジトリのGitHub Pagesに反映するには、mainブランチにソースコードをgit pushしてください。
自動でGitHub Actionsが起動してデプロイを行います。

## Built With / 協働するシステム

* [Next.js](https://nextjs.org/) - 使用した web フレームワーク

## Directory and File Structure / ディレクトリ・ファイル構成

※ 2023年2月現在

```
.
├── .babelrc
├── .eslintrc.json
├── .gitignore
├── README.md
├── data # サイト表示に必要なデータ
│     ├── hiddenGroup.txt
│     ├── integbio_database.json # 自動生成のため編集不可
│     ├── integbio_database_column.json # 自動生成のため編集不可
│     ├── sip_database.json # 自動生成のため編集不可
│     └── sip_database_column.json # 自動生成のため編集不可
├── next.config.js
├── node_modules # 依存ライブラリ（※ npm installで生成されます。git管理外です）
├── out # 最終的な出力（※ npm run exportで生成されます。git管理外です）
├── package-lock.json
├── package.json
├── prettier.config.js
├── public # サイトに使用している画像などのアセット
├── src
│     ├── @types
│     ├── components
│     │     ├── Elements
│     │     ├── Footer
│     │     ├── Header
│     │     ├── Layout
│     │     └── Navigation
│     ├── lib
│     ├── markdown
│     │     └── group # 研究グループ詳細ページ
│     │         ├── 1A.mdx
│     │         ├── 1B.mdx
│     │         ├── 1C.mdx
│     │         ├── 2B.mdx
│     │         ├── 3A.mdx
│     │         ├── 3B.mdx
│     │         ├── 3C.mdx
│     │         ├── 3D.mdx
│     │         ├── 4ADB.mdx
│     │         └── 4Amicrobe.mdx
│     ├── pages
│     │     ├── _app.tsx
│     │     ├── _document.tsx
│     │     ├── data
│     │     │     ├── [id].tsx
│     │     │     └── index.tsx
│     │     ├── group
│     │     │     ├── [group_id].tsx
│     │     │     └── index.tsx
│     │     └── index.tsx
│     └── styles
├── stylelint.config.js
└── tsconfig.json
```

## How to edit content / コンテンツの編集方法

### 指定の研究グループ詳細ページを非表示にする

`data/hiddenGroup.txt` に非表示にしたい研究グループのIDを記入します。
  - 複数ある場合は、改行して記入してください。
  - 記入例
    ```
    2A
    3B
    ```
