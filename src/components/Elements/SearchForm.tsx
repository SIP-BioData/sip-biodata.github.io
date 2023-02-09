import { css } from '@emotion/react'
import Image from 'next/image'

import searchImg from '../../../public/iconSearch.svg'

type Props = {
  value?: string
  onChangeKeyword: (v: string) => void
}

const style = css`
  display: flex;
  align-items: center;
  border: var(--border-base);
  border-radius: 4px;
  padding: 16px 14px;

  form {
    width: 100%;
    input {
      width: 100%;
      border: none;
      outline: none;
      background: none;
      padding-left: 16px;
      font-size: 16px;
    }
  }
`
const SearchForm = (props: Props) => {
  const handleSearch = (e: { target: { value: string } }) => {
    props.onChangeKeyword(e.target.value)
  }

  return (
    <div css={style}>
      <Image src={searchImg} alt="検索" />
      <form>
        <input
          type="search"
          name="search"
          placeholder="キーワードで検索"
          value={props.value}
          onChange={handleSearch}
        />
      </form>
    </div>
  )
}

export default SearchForm
