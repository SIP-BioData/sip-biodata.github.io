import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  path: string
  leftIcon?: HTMLImageElement
  rightIcon?: HTMLImageElement
  invert?: boolean
  children: ReactNode
}

type LinkItemProps = {
  path: string
  invert?: boolean
  children: ReactNode
}

const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 240px;
  font-size: 18px;
  color: var(--col-wh);
  border-radius: 40px;
  background-color: var(--col-bk);
  padding: 10px 20px;
`

const invertedColorStyle = css`
  ${buttonStyle};
  color: var(--col-bk);
  background-color: var(--col-wh);
`

const LinkItem = ({ invert = false, ...itemProps }: LinkItemProps) => {
  const Tag = /^http.?:\/\//.test(itemProps.path) ? 'a' : Link
  return (
    <Tag
      css={invert ? invertedColorStyle : buttonStyle}
      href={itemProps.path}
      target={Tag === 'a' ? '_blank' : undefined}
      rel={Tag === 'a' ? 'noreferrer' : undefined}
    >
      {itemProps.children}
    </Tag>
  )
}

const LinkButton = ({ invert = false, ...props }: Props) => {
  return (
    <LinkItem path={props.path} invert={invert}>
      {props.leftIcon && (
        <Image
          src={props.leftIcon.src}
          width={props.leftIcon.width}
          height={props.leftIcon.height}
          alt=""
        />
      )}
      {props.children}
      {props.rightIcon && (
        <Image
          src={props.rightIcon.src}
          width={props.rightIcon.width}
          height={props.rightIcon.height}
          alt=""
        />
      )}
    </LinkItem>
  )
}

export default LinkButton
