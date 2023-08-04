import { ActicleType } from './personal'

//菜单
export type MenuType = {
    id : number,
    title : string,
    path : string,
    index : string,
    icon : string
}

//根据页码获取文章列表类型
export type ArticlesByPageType = {
    totalPage : number,
    pageData : ActicleType[],
    total: number
}