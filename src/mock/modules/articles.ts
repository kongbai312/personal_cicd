// 文章列表
import ArticlesJson from '../mockJson/articles.json';
import { handleData } from '../index';
//根据页码获取文章数据
type OptionType = {
    body: string
    url: string,
    type : string
}
//分页获取所有文章
export const getPageArticles = ( option : OptionType ) => {
    // 数据
    let articles = ArticlesJson
    //总条数
    let total = articles.length
    // 转换为对象
    let body = JSON.parse(option.body)
    // 总页数
    let totalPage = Math.ceil( articles.length / body.pageSize )
    // 获取第X页数据
    const getPageData = () => {
        // 起始索引
        let start = body.pageSize * ( body.page - 1)
        // 如果请求的页码大于总页码，返回空数组
        if(body.page > totalPage){
            return []
        }
        else if(body.page <= totalPage){
            return articles.slice( start , start + body.pageSize)
        }
    }
    //第X页的数据
    let pageData = getPageData()
    return handleData({
        totalPage,
        pageData,
        total
    })
}

