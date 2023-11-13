//一些未正式上线的api
import request from '@/utils/request';

//上传图片
export const uploadImgApi = (data :any) => {
    return request({
        headers :{
            Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3d3dy5pdGNhc3QuY24vIiwic3ViIjoiM2FkYmJkYjEtZDE1NC00ZTViLThjZDktODYzNzljNTZiODhjIiwianRpIjoiZDEyZmEzMTMtOTMyYi00ZTU0LWJjMDQtYjcxODdhYTQwMWU0IiwiaWF0IjoxNjk5ODc4MzU1LCJleHAiOjE2OTk4ODE5NTV9.AKAquyjayXSdVPC6Ftcn8dwHWKOR2U8zyYtgiuyouTY'
        },
        url : 'http://geek.itheima.net/v1_0/user/photo',
        method:'patch',
        data
    })
}