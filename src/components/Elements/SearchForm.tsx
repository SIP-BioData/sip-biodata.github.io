import { css } from '@emotion/react'
import Image from 'next/image'
import { SetStateAction, useEffect, useState } from 'react'

import searchImg from '../../../public/iconSearch.svg'

type Props = {
  keywords: string[]
  onChangeKeyword: (v: string[]) => void
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
  const [value, setValue] = useState('')
  const [keywordList, setKeywordList] = useState<Array<string>>([])

  useEffect(() => {
    if (value === '' && keywordList.length === 0) {
      onChange()
    }
  }, [value, keywordList])

  useEffect(() => {
    const value = props.keywords.join(' ')
    setValue(value)
  }, [props.keywords])

  const onChange = () => {
    props.onChangeKeyword(keywordList)
  }

  const handleSearch = (key: string) => {
    switch (key) {
      case 'Enter':
        onChange()
        break
      default:
        break
    }
  }

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
    if (typeof e.target.value === 'string') {
      const keywords = e.target.value
        .replace(/　/g, ' ') // eslint-disable-line no-irregular-whitespace
        .trim()
        .split(/\s+/u)
        .filter((v) => v !== '')
      setKeywordList(keywords)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <div css={style}>
      <Image src={searchImg} alt="検索" />
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="キーワードで検索"
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => handleSearch(e.key)}
        />
      </form>
    </div>
  )
}

export default SearchForm
