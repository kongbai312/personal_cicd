
//引入mockjs
import Mock from 'mockjs'

//引入json文件

// 文章列表
import ArticlesJson from './mockJson/articles.json';
//轮播列表
import SwiperJson from './mockJson/swiperList.json';
//公告列表
import AnnouncementJson from './mockJson/announcementList.json';
//关于界面的数据
import AboutJson from './mockJson/aboutData.json';
//说说列表
import TalkJson from './mockJson/talkData.json'

//引入处理函数
import { getPageArticles } from './modules/articles';
import { getArticle } from '@/mock/modules/article';
import { getAlbum } from './modules/album'

//处理数据
export const handleData = ( dataJson : object ) => {
    return{
        code : 200 ,
        message : '请求成功',
        data: dataJson
    }
}


//使用mockjs模拟数据

//文章数据
Mock.mock('/mock/articles','get',handleData(ArticlesJson))

//根据分页获取文章数据
Mock.mock('/mock/articles','post',getPageArticles)

//轮播图数据
Mock.mock('/mock/swiper','get',handleData(SwiperJson))

//公告
Mock.mock('/mock/announcement','get',handleData(AnnouncementJson))

//关于
Mock.mock('/mock/about','get',handleData(AboutJson))

//md数据 
Mock.mock('/mock/md','post', getArticle)

//说说数据
Mock.mock('/mock/talk','get',handleData(TalkJson))

//相册数据
Mock.mock('/mock/album','post', getAlbum)
