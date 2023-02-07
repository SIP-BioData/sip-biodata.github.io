import { css } from '@emotion/react'
import { ReactNode } from 'react'

import Button from '@/components/Elements/Button'

type Props = {
  iconLeft?: ReactNode
  slug: string
  text: string
  iconRight?: ReactNode
}

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
`

const BackToDataLink = ({ iconLeft, slug, text, iconRight }: Props) => {
  return (
    <div css={buttonContainerStyle}>
      <Button
        iconLeft={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              id="arrow-up-circle-outline"
              d="M8.8,3.2H7.2V9.6L4.4,6.8,3.264,7.936,8,12.672l4.736-4.736L11.6,6.8,8.8,9.6V3.2M8,16A8,8,0,1,0,0,8a8,8,0,0,0,8,8m0-1.6A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4Z"
              transform="translate(16) rotate(90)"
              fill="#fff"
            />
          </svg>
        }
        slug="/data"
        text="データリストに戻る"
      />
    </div>
  )
}

export default BackToDataLink
