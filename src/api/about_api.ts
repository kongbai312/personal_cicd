//关于部分的api

//引入二次封装的mock的axios
import request from '@/utils/request';

import type { CommitItemType} from '@/types/about'

//获取github提交记录
export const getCommitApi = () => request<CommitItemType[]>('https://api.github.com/repos/kongbai312/personal_ts/commits')