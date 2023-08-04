// about部分的类型声明文件

// about数据类型
export type AboutDataType = {
    id: number,
    title: string,
    contentClass: string,
    refId: number,
    content:  string[]
}

//commit提交类型
export type CommitType = {
    date:string,
    count:number
}

//commit数组单个对象类型
export type CommitItemType = {
    commit : {
        committer:{
            date: string
        }
    }
}