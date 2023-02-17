import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'

type TabItem = {
  label: string
  value: string
}

type Props = {
  items: TabItem[]
  current: string
  onClickItem: (item: string) => void
}

const tabStyle = css`
  display: flex;
  align-items: end;
  gap: 22px;
  padding: 0 3px;
  margin-bottom: -1px;
  overflow: hidden;
`

const tabItemStyle = css`
  flex: 1 1 50%;
  box-shadow: var(--shadow-wide);
  background-color: var(--col-bg-gray);
  border-radius: 8px 8px 0 0;
  padding: 8px 0;
`

const tabItemCurrentStyle = css`
  ${tabItemStyle};
  border-top: 8px solid var(--col-light-gray);
  background-color: var(--col-wh);
  padding-top: 0;
`

const buttonStyle = css`
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 16px;
  border: none;
  border-radius: 4px;
  appearance: none;
  background: none;
  cursor: pointer;
`

const Tab = (props: Props) => {
  const isFirstRender = useRef<boolean>(true)
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    props.onClickItem(value)
  }, [isFirstRender, value])

  const handleClick = (value: string) => {
    setValue(value)
  }

  return (
    <ul css={tabStyle}>
      {props.items.map((item, index) => (
        <li
          key={index}
          css={
            item.value === props.current ? tabItemCurrentStyle : tabItemStyle
          }
        >
          <button css={buttonStyle} onClick={() => handleClick(item.value)}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tab
