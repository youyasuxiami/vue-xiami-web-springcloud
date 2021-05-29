import request from '@/utils/request'
export function getNewBlog (params) {
  return request({
    url: '/front/index/getNewBlog',
    method: 'get',
    params
  })
}

export function getHotTag (params) {
  return request({
    url: '/front/index/getHotTag',
    method: 'get',
    params
  })
}

export function getBlogByLevel (params) {
  return request({
    url: '/front/index/getBlogByLevel',
    method: 'get',
    params
  })
}

export function getHotBlog (params) {
  return request({
    url: '/front/index/getHotBlog',
    method: 'get',
    params
  })
}

/**
 * 博客查询
 * @param params
 */
export function queryBlog (params) {
  return request({
    url: '/front/query',
    method: 'post',
    params
  })
}




