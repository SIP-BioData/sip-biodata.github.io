import { css } from '@emotion/react'

import Button from '@/components/Elements/Button'

import arrowBack from '../../../public/arrowBack.svg'

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
`

const BackToDataLink = () => {
  return (
    <div css={buttonContainerStyle}>
      <Button path="/data" leftIcon={arrowBack}>
        データリストに戻る
      </Button>
    </div>
  )
}

export default BackToDataLink
