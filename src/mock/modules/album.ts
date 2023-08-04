//引入数据
import albumData from './albumData'
import { handleData } from '../index';

type ObjType = {
    id : number,
    album : string[]
}

//处理数据
const getAlbumArr = () => {
    // 相册数据
    let arr = []
    // i为相册数量
    for( let i = 1 ; i <= albumData.length ; i++){
        let obj = {} as ObjType
        obj.album = albumData[ i - 1 ]
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

//根据id获取相册
export const getAlbum = ( option : OptionType ) => {
    // 转换为对象
    let body = JSON.parse(option.body)
    // 提取id
    let id = body.id
    //相册数组
    let albumArr = getAlbumArr()
    // 根据Id找到对应相册
    let obj = albumArr.find( ( item ) => {
        return item.id === id
    })
    //提取每页数量
    let pageSize = body.pageSize
    //第几页
    let page = body.page
    // 数据
    let album = obj ? obj.album : []
    //相片总数
    let total = album.length
    // 总页数
    let totalPage = Math.ceil( total / pageSize )
    // 获取第X页数据
    const getPageData = () => {
        // 起始索引
        let start = pageSize * ( page - 1)
        // 如果请求的页码大于总页码，返回空数组
        if( page > totalPage ){
            return []
        }
        else if( page <= totalPage ){
            return album.slice( start , start + pageSize)
        }
    }
    //第X页的数据
    let pageData = getPageData()
    return handleData({
        total,
        totalPage,
        pageData
    })
}