import request from '@/utils/request'
export function getMe (params) {
  return request({
    url: '/front/about/getMe',
    method: 'get',
    params
  })
}


