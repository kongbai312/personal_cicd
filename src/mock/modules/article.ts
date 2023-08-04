// 根据文章id获取文章详情

import articlesData from './articlesData';

//处理数据
export const handleMd = ( dataJson : string ) => {
    return{
        code : 200 ,
        message : '请求成功',
        data: dataJson
    }
}

type ObjType = {
    id : number,
    md : string
}
// 处理文章
const getArticleArr = () => {
    // 文章数据
    let arr = []
    // i为文章数量
    for( let i = 1 ; i <= articlesData.length ; i++){
        let obj = {} as ObjType
        obj.md = articlesData[ i - 1 ]
        obj.id = i
        arr.push(obj)
    }
    return arr
}

type OptionType = {
    body: string
    url: string,
    type : string
}

//根据Id获取文章详情
export const getArticle = ( option : OptionType ) => {
    // 转换为对象
    let body = JSON.parse(option.body)
    // 提取id
    let id = body.id
    // 文章列表数组
    let articleArr = getArticleArr()
    // 根据Id找到对应文章
    let article = articleArr.find( ( item ) => {
        return item.id === id
    })
    // 数据
    let data = article ? article.md : ''
    // 返回
    return handleMd(data)
}
