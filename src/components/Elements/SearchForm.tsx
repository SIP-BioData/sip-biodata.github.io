import { css } from '@emotion/react'
import Image from "next/image";
import { ReactNode } from 'react'

import serchImg from "../../../public/iconSearch.svg";

type Props = {
  slug: string
  text: string
  icon?: ReactNode
}

const style = css`
  displey: flex;
  border: var(--border-form);
  border-radius: 4px;
  padding: 16px 14px;
  
  form { 
  
    input {
      padding: 0;
      border: none;
      outline: none;
      background: none;
    }
  }
`
const SearchForm = () => {
  return (
      <div css={style}>
        <Image src={serchImg} alt="検索"/>
        <form action="" method="get">
          <input type="search" name="search" placeholder="キーワードで検索"/>
        </form>
      </div>
  )
}

export default SearchForm
