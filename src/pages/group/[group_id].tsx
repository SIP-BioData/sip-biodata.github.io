import { css } from '@emotion/react'
import { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ReactNode } from 'react'

import GroupDetailList from '@/components/Elements/GroupDetailList'
import Layout from '@/components/Layout/Layout'
import LowerPageLayout from '@/components/Layout/LowerPageLayout'
import BackToDataLink from '@/components/Navigation/BackToDataLink'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import { getGroupStaticPaths, getSipGroupStaticProps } from '@/lib/static'

export const getStaticProps = getSipGroupStaticProps
export const getStaticPaths = getGroupStaticPaths

type Props = {
  groupData: Item[]
  groupName: string
  source: MDXRemoteSerializeResult
  columns: Item
}

const containerStyle = css`
  background-color: var(--col-wh);
  margin: 26px 0 100px;
  padding: 60px;
`

const h1Style = css`
  margin-bottom: 56px;
`

const h2Style = css`
  margin-bottom: 38px;
`

const textStyle = css`
  margin-bottom: 30px;
`

const linkStyle = css`
  color: var(--col-bl);
  word-break: break-all;
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: var(--col-bl);
    mask: var(--link-icon-url) no-repeat;
    margin-left: 12px;
  }
`

const lineStyle = css`
  margin: 40px 0;
  height: 0;
  border: 0;
  border-top: var(--border-base);
`

const Heading1 = (props: { children?: ReactNode }) => (
  <h1 css={h1Style}>{props.children}</h1>
)

const Heading2 = (props: { children?: ReactNode }) => (
  <h2 css={h2Style}>{props.children}</h2>
)

const Text = (props: { children?: ReactNode }) => (
  <p css={textStyle}>{props.children}</p>
)

const Link = (props: { children?: ReactNode }) => (
  <a css={linkStyle} {...props} target="_blank">
    {props.children}
  </a>
)

const HorizontalLine = () => <hr css={lineStyle} />

const components: MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  p: Text,
  a: Link,
  hr: HorizontalLine,
}

const GroupDetail = (props: Props) => {
  const breadcrumbs = [
    {
      label: '研究グループ',
      path: '/group',
    },
    {
      label: props.groupName,
    },
  ]

  return (
    <Layout title={props.groupName}>
      <LowerPageLayout>
        <Breadcrumbs items={breadcrumbs} />
        <div css={containerStyle}>
          <h1 css={h1Style}>研究グループ：{props.groupName}</h1>
          <MDXRemote {...props.source} components={{ Image, ...components }} />
          <h2 css={h2Style}>データ一覧</h2>
          <GroupDetailList list={props.groupData} columns={props.columns} />
          <BackToDataLink />
        </div>
      </LowerPageLayout>
    </Layout>
  )
}

export default GroupDetail
