import { css } from '@emotion/react'

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

const SelectBox = () => {
  return (
    <section css={style}>
      <label>並び順：</label>
      <div css={selectStyle}>
        <select name="data" id="data-select">
          <option value="">関連性</option>
          <option value="">その１</option>
          <option value="">その２</option>
        </select>
      </div>
    </section>
  )
}

export default SelectBox
