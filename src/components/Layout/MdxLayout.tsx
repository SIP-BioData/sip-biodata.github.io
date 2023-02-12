import { css } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
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
    width: 16px;
    height: 16px;
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

const MdxLayout = ({ children }: Props) => {
  return (
    <section css={containerStyle}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </section>
  )
}

export default MdxLayout
