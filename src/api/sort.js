import request from '@/utils/request'
export function getSortTimes (params) {
  return request({
    url: '/front/sort/getSortTimes',
    method: 'get',
    params
  })
}

export function getArticleByMonth (params) {
  return request({
    url: '/front/sort/getArticleByMonth',
    method: 'get',
    params
  })
}



