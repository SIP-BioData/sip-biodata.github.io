import { css } from '@emotion/react'


const style = css`
  display: flex;
  align-items: center;
  
  select {
  width: 160px;
  padding: 14px;
  }
`
const SelectBox = () => {
  return (
      <section css={style}>
        <label>並び順：</label>
        <select name="data" id="data-select">
          <option value="">関連性</option>
          <option value="">その１</option>
          <option value="">その２</option>
        </select>
      </section>
  )
}

export default SelectBox
