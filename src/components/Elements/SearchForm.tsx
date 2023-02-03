import { css } from '@emotion/react'
import Image from 'next/image'

import serchImg from '../../../public/iconSearch.svg'

const style = css`
  display: flex;
  align-items: center;
  border: var(--border-form);
  border-radius: 4px;
  padding: 16px 14px;

  form {
    input {
      padding: 0;
      border: none;
      outline: none;
      background: none;
      margin-left: 16px;
      font-size: 16px;
    }
  }
`
const SearchForm = () => {
  return (
    <div css={style}>
      <Image src={serchImg} alt="検索" />
      <form action="" method="get">
        <input type="search" name="search" placeholder="キーワードで検索" />
      </form>
    </div>
  )
}

export default SearchForm
