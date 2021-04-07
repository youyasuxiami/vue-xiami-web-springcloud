import request from '@/utils/request'
export function getBlogTypes (params) {
  return request({
    url: '/front/classify/getBlogTypes',
    method: 'get',
    params
  })
}

export function getArticleByBlogType (params) {
  return request({
    url: '/front/classify/getArticleByBlogType',
    method: 'get',
    params
  })
}



