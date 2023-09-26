//休闲模块api
import request from '@/utils/request';

//根地址
let baseUrl = 'https://api.apiopen.top'

//发送动态 改 发送评论
// image 用来存name , avatar ,time
// text 用来存comment
export const setCommentApi = ( infoArr : string[] ,comment : string ) => {
    return request({
        url : baseUrl + '/api/publishDynamic',
        method : 'post',
        data: {
            images : infoArr,
            text : comment
        }
    })
}

//获取个人所有动态 改 获取所有评论
// size 小于等于20
export const getCommentsApi = ( params : { page : number , size : number}) => {
    return request({
        url : baseUrl + `/api/getPersonDynamicList?page=${params.page}&size=${params.size}`,
        method : 'get',
    })
}