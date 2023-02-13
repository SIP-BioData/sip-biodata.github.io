import { css } from '@emotion/react'
import { SetStateAction, useEffect, useRef, useState } from 'react'

type Item = {
  label: string
  value: string
}

type Props = {
  items: Item[]
  onChangeItem: (item: string) => void
}

const style = css`
  display: flex;
  align-items: center;
`

const selectStyle = css`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 12px;
    top: 20px;
    width: 6px;
    height: 6px;
    border-top: var(--border-base);
    border-left: var(--border-base);
    transform: translateY(-50%) rotate(-135deg);
    pointer-events: none;
  }

  select {
    width: 160px;
    padding: 14px;
    border: var(--border-base);
    border-radius: 5px;
    appearance: none;
  }
`

const SelectBox = (props: Props) => {
  const isFirstRender = useRef<boolean>(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    props.onChangeItem(value)
  }, [isFirstRender, value])

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  return (
    <div css={style}>
      <label>並び順：</label>
      <div css={selectStyle}>
        <select defaultValue="" onChange={handleChange}>
          <option value="">---</option>
          {props.items.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectBox
