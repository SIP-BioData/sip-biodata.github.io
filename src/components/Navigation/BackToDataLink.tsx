import { css } from '@emotion/react'

import LinkButton from '@/components/Elements/LinkButton'

import arrowBack from '../../../public/arrowBack.svg'

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
`

const BackToDataLink = () => {
  return (
    <div css={buttonContainerStyle}>
      <LinkButton path="/data" leftIcon={arrowBack}>
        データリストに戻る
      </LinkButton>
    </div>
  )
}

export default BackToDataLink
