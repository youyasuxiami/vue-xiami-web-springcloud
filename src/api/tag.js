import request from '@/utils/request'
export function getTagType (params) {
  return request({
    url: '/front/tag/getTagType',
    method: 'get',
    params
  })
}

export function getArticleByBlogTag (params) {
  return request({
    url: '/front/tag/getArticleByBlogTag',
    method: 'get',
    params
  })
}



