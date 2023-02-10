import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  sum: number
  perPage: number
  current: number
  onChange: (page: number) => void
}

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 430px;
  margin-left: 28px;
`

const listStyle = css`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
`

const itemStyle = css`
  width: 40px;
  text-align: center;
  border: var(--border-base);
  margin: 0 8px;
  padding: 6px 0;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`

const currentStyle = css`
  color: var(--col-wh);
  font-weight: bold;
  background-color: #9b9b9b;
  cursor: default;
`

const ellipseStyle = css`
  padding: 6px 0;
`

const buttonStyle = css`
  appearance: none;
  border: 0;
  background: none;
  cursor: pointer;
`

const Pagination = (props: Props) => {
  const isFirstRender = useRef<boolean>(true)
  const [currentPage, setPage] = useState<number>(1)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    props.onChange(currentPage)
  }, [isFirstRender, currentPage])

  useEffect(() => {
    setPage(props.current)
  }, [props.current])

  const totalPage: number = Math.ceil(props.sum / props.perPage)

  const handleBack = (): void => {
    if (currentPage === 1) {
      return
    }
    setPage(currentPage - 1)
  }

  const handleForward = (): void => {
    if (currentPage === totalPage) {
      return
    }
    setPage(currentPage + 1)
  }

  const handleMove = (page: number): void => {
    setPage(page)
  }

  return (
    <div css={containerStyle}>
      <button css={buttonStyle} onClick={() => handleBack()}>
        ＜
      </button>
      <ul css={listStyle}>
        {[...Array.from({ length: totalPage }, (_, i) => i + 1)].map((page) =>
          page === 1 ||
          (page >= currentPage - 1 && page <= currentPage + 1) ||
          page === totalPage ? (
            <li
              key={page}
              onClick={() => handleMove(page)}
              css={[itemStyle, page === currentPage ? currentStyle : undefined]}
            >
              {page}
            </li>
          ) : page === 2 || page === totalPage - 1 ? (
            <li key={page} css={ellipseStyle}>
              ...
            </li>
          ) : null
        )}
      </ul>
      <button css={buttonStyle} onClick={() => handleForward()}>
        ＞
      </button>
    </div>
  )
}

export default Pagination
