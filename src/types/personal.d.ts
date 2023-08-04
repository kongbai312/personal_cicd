// 文章类型
export type ActicleType = {
    id : number ,
    title: string ,
    createTime: string,
    tags : string[],
    isTop: 1 | 0,
    brief: string,
    image : string ,
}

// 轮播图
export type SwiperType = {
    id : number,
    articleId : number,
    title: string,
    image: string,
    createTime : string
}

// 公告
export type AnnouncementType = {
    id : number,
    text : string
}