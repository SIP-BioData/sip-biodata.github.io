import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

export const getSearchWordsFromQuery = (query: ParsedUrlQuery) => {
  if (query['search[]']) {
    return Array.isArray(query['search[]'])
      ? query['search[]'].map((v) => String(v))
      : [query['search[]']]
  } else {
    return []
  }
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

  type paramsType = {
    search: string[] | null
    [key: string]: any
  }

  const params: paramsType = {
    search: searchWords,
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

export const getSortedItems = (items: any[], value: string, order: string) => {
  const keyArray = value.split('|')
  return items.sort((a, b) => {
    const itemA = a[keyArray[0]] ?? a[keyArray[1]]
    const itemB = b[keyArray[0]] ?? b[keyArray[1]]
    if (itemA < itemB) {
      return order === 'asc' ? -1 : order === 'desc' ? 1 : 0
    }
    if (itemA > itemB) {
      return order === 'asc' ? 1 : order === 'desc' ? -1 : 0
    }
    return 0
  })
}

export const getFilteredItems = (items: Item[], keywords: string[]) => {
  return items.filter((item) =>
    Object.values(item).find((v: string) =>
      v != null ? keywords.some((str) => v.includes(str)) : false
    )
  )
}
