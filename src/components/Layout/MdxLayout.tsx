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
    <svg
      fill="#0068d0"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      style={{
        marginLeft: '12px',
      }}
    >
      <path
        className="st0"
        d="M9.8,0v1.8H13l-8.7,8.7l1.3,1.3L14.2,3v3.2H16V0 M14.2,14.2H1.8V1.8H8V0H1.8C0.8,0,0,0.8,0,1.8c0,0,0,0,0,0
v12.4c0,1,0.8,1.8,1.8,1.8h12.4c1,0,1.8-0.8,1.8-1.8V8h-1.8V14.2z"
      />
    </svg>
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
