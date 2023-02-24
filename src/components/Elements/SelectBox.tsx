import { css } from '@emotion/react'
import { SetStateAction, useEffect, useRef, useState } from 'react'

type SelectItem = {
  label: string
  value: string
  order?: string
}

type Props = {
  items: SelectItem[]
  current: string | null
  onChangeItem: (item: string | null) => void
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
    padding: 14px 28px 14px 14px;
    border: var(--border-base);
    border-radius: 5px;
    appearance: none;
  }
`

const SelectBox = (props: Props) => {
  const isFirstRender = useRef<boolean>(true)
  const [value, setValue] = useState<string | null>(null)
  const items = [{ label: '---', value: '' }, ...props.items]

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    props.onChangeItem(value)
  }, [isFirstRender, value])

  useEffect(() => {
    setValue(props.current)
  }, [props.current])

  const handleChange = (e: {
    target: { value: SetStateAction<string | null> }
  }) => {
    setValue(e.target.value)
  }

  return (
    <div css={style}>
      <label>並び順：</label>
      <div css={selectStyle}>
        <select value={value || ''} onChange={handleChange}>
          {items.map((item, index) => (
            <option
              key={index}
              value={item.order ? `${item.value}:${item.order}` : item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectBox
