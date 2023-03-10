import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

export const getSearchWordsFromQuery = (query: ParsedUrlQuery) => {
  if (query['search[]']) {
    return Array.isArray(query['search[]'])
      ? query['search[]'].map((v) => String(v))
      : [String(query['search[]'])]
  } else {
    return []
  }
}

export const getDatabaseTypeFromQuery = (query: ParsedUrlQuery) => {
  return query['database'] ? String(query['database']) : ''
}

export const updateRoute = (
  router: NextRouter,
  params: {
    [key: string]: any
  },
  newParams: Record<string, any>
) => {
  const query: {
    [key: string]: any
  } = {}
  const arrayParams = ['search']
  Object.keys(params).forEach((k) => {
    if (params[k]) {
      if (arrayParams.includes(k)) {
        query[k + '[]'] = params[k]
      } else {
        query[k] = params[k]
      }
    }
  })
  Object.keys(newParams).forEach((k) => {
    if (newParams[k]) {
      query[k] = newParams[k]
    } else {
      delete query[k]
    }
  })

  const asPath = router.asPath.includes('?')
    ? router.asPath.substring(0, router.asPath.indexOf('?'))
    : router.asPath
  router.push(
    {
      pathname: router.pathname,
      query,
    },
    {
      pathname: asPath,
      query,
    }
  )
}

export const buildParams = (router: NextRouter, additionalParams?: object) => {
  const searchWords = getSearchWordsFromQuery(router.query)
  const dataType = getDatabaseTypeFromQuery(router.query)

  type paramsType = {
    search: string[] | null
    database: string | null
    [key: string]: any
  }

  const params: paramsType = {
    search: searchWords,
    database: dataType,
  }

  if (additionalParams) {
    // 追加でパラメータが必要な時は引数で与えられたobjectを追加する
    Object.assign(params, additionalParams)
  }

  Object.keys(params).forEach((key: string) => {
    if (!params[key as keyof paramsType]) {
      delete params[key]
    }
  })

  return params
}

export const debounce = <T extends (...args: any[]) => unknown>(
  callback: T,
  delay = 250
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => callback(...args), delay)
  }
}

export const halfWidthString = (str: string) => {
  const re = /[Ａ-Ｚａ-ｚ０-９]/g
  if (!re.test(str)) {
    return str
  } else {
    return str.replace(re, function (s) {
      if (!re.test(s)) {
        return s
      } else {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
      }
    })
  }
}

export const getSortedItems = (items: any[], value: string, order: string) => {
  const keyArray = value.split('|')
  return items.sort((a, b) => {
    const itemA =
      halfWidthString(a[keyArray[0]]) ?? halfWidthString(a[keyArray[1]]) ?? ''
    const itemB =
      halfWidthString(b[keyArray[0]]) ?? halfWidthString(b[keyArray[1]]) ?? ''
    if (order === 'asc') {
      return itemA.localeCompare(itemB, 'ja', { sensitivity: 'base' })
    } else if (order === 'desc') {
      return itemB.localeCompare(itemA, 'ja', { sensitivity: 'base' })
    }
    return 0
  })
}

export const getFilteredItems = (items: Item[], keywords: string[]) => {
  return items.filter((item) =>
    Object.values(item).find((v: string) =>
      v != null ? keywords.some((str) => v.toLowerCase().includes(str.toLowerCase())) : false
    )
  )
}
