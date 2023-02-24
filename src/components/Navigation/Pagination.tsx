import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  sum: number
  perPage: number
  current: number
  onChange: (page: number) => void
}

const containerStyle = css`
  display: grid;
  grid-template-columns: 65px auto 65px;
  align-items: center;
  width: 100%;
  max-width: 460px;
  margin-left: 28px;
`

const listStyle = css`
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
  font-size: 14px;
  padding: 10px;
  border: var(--border-base);
  border-radius: 4px;
  appearance: none;
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
      <div>
        {currentPage > 1 && (
          <button css={buttonStyle} onClick={() => handleBack()}>
            &lt; Prev
          </button>
        )}
      </div>
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
      <div>
        {totalPage > 0 && currentPage !== totalPage && (
          <button css={buttonStyle} onClick={() => handleForward()}>
            Next &gt;
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
