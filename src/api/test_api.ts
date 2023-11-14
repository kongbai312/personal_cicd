//一些未正式上线的api
import { useTestStore } from '@/stores/modules/test';
import request from '@/utils/request';

//引入store
const testStore = useTestStore()

//获取上传图片用户所需的token
export const getUploadImgTokenApi = () => {
    return request({
        url:'http://geek.itheima.net/v1_0/authorizations',
        method:'post',
        data:{
            mobile:'13760176666',
            code:'246810'
        }
    })
}

//上传图片
export const uploadImgApi = (data :any) => {
    return request({
        headers :{
            Authorization : `Bearer ${testStore.uploadImgToken}`
        },
        url : 'http://geek.itheima.net/v1_0/user/photo',
        method:'patch',
        data
    })
}