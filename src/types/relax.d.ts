// 说说部分
export type TalkType = {
    id : number ,
    name : string ,
    avatar : string ,
    createTime : string ,
    text : string ,
    like : number ,
    comment : string ,
    imageList : string[]
}

//弹幕部分
export type DanmuType = {
    id : number ,
    name : string ,
    avatar : string ,
    text : string
}

//发送评论部分
export type CommentType = {
    id? : number,
    name: string,
    avatar: string,
    text: string,
    time: string
}