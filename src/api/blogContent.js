import request from '@/utils/request'

export function getBlogById (params) {
    return request({
        url: '/front/content/getBlogById',
        method: 'get',
        params
    })
}

export function praiseBlogById (params) {
    return request({
        url: '/front/content/praiseBlogById',
        method: 'get',
        params
    })
}

export function getSameBlogByBlogId (params) {
    return request({
        url: '/front/content/getSameBlogByBlogId',
        method: 'get',
        params
    })
}

export function addComment(params) {
    return request({
        url: '/front/content/addComment',
        method: 'post',
        data: params
    })
}

export function getCommentList(params) {
    return request({
        url: '/front/content/getCommentList',
        method: 'post',
        data: params
    })
}

export function reportComment (data) {
    return request({
        url: '/front/content/reportComment',
        method: 'post',
        data
    })
}
export function deleteComment (data) {
    return request({
        url: '/front/content/deleteComment',
        method: 'delete',
        data
    })
}

export function getAllCommentList(params) {
    return request({
        url: '/front/content/getAllCommentList',
        method: 'post',
        data: params
    })
}





