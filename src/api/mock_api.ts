//引入二次封装的mock的axios
import mockRequest from '@/utils/mockRequest';

import type { ActicleType,SwiperType,AnnouncementType} from '@/types/personal';
import type { AboutDataType } from '@/types/about';
import type { ArticlesByPageType } from '@/types/articles';
import type { TalkType, DanmuType } from '@/types/relax';

//获取文章列表
export const getArticleListApi = () => mockRequest<ActicleType[]>('/articles')

//根据分页获取文章列表
export const getArticleListByPageApi = ( data : { pageSize : number, page :number} ) => {
    return mockRequest<ArticlesByPageType>({
        url:'/articles',
        method:'post',
        data
    })
}

//获取轮播列表
export const getSwiperListApi = () => mockRequest<SwiperType[]>('/swiper')

//获取公告列表
export const getAnnouncementListApi = () => mockRequest<AnnouncementType[]>('/announcement')

//获取关于列表
export const getAboutDataApi = () => mockRequest<AboutDataType[]>('/about')

//获取md文档
export const getMdApi = ( id : number ) => {
    return mockRequest({
        url:'/md',
        method:'post',
        data:{
            id
        }
    })
}

//获取说说列表
export const getTalkDataApi = () => mockRequest<TalkType[]>('/talk')

//获取相册
export const getAlbumApi = ( data : { id: number, pageSize : number, page :number} ) => {
    return mockRequest({
        url:'/album',
        method:'post',
        data
    })
}

//获取弹幕列表
export const getDanmuApi = () => {
    return mockRequest<DanmuType[]>({
        url:'/danmu',
        method:'get',
    })
}