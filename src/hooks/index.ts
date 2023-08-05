// 微信QQ菜单按钮点击
export const useMenuIconClick = () => {
    //控制弹窗显示隐藏
    let showDialog = ref(false)

    //当前点击的联系方式
    let activeIcon = ref()
    //图标点击事件
    const iconClick = ( key : string) => {
        if( key === 'qq'){
            //打开弹窗
            showDialog.value = true
            activeIcon.value = key
        }
        else if( key === 'wechat'){
            //打开弹窗
            showDialog.value = true
            activeIcon.value = key
        }
        else if( key === 'github'){
            window.location.href = 'https://github.com/kongbai312' 
        }
    }
    return{
        showDialog,
        activeIcon,
        iconClick
    }
}

//随机生成一个背景图
export const useRandomBg = () => {
    //图片默认路径列表
    let imgArr : string[] = [
        'https://pic.imgdb.cn/item/64ce21f21ddac507cc81733b.jpg',
        'https://pic.imgdb.cn/item/64ce21fa1ddac507cc818ef1.jpg',
        'https://pic.imgdb.cn/item/64ce22011ddac507cc81a76c.jpg',
        'https://pic.imgdb.cn/item/64ce22081ddac507cc81b527.jpg',
        'https://pic.imgdb.cn/item/64ce220f1ddac507cc81c32e.webp',
        'https://pic.imgdb.cn/item/64cdf7521ddac507cc0fa9ef.jpg'
    ]

    // //图片默认路径列表初始化
    // const imgArrInit = () => {
    //     //定义一共有几个背景图
    //     let length = 6
    //     for(let i = 1 ; i <= length ; i++){
    //         imgArr.push(`/src/assets/bg${i}.jpg`)
    //     }
    // }
    // imgArrInit()

    //生成一个 0 至 图片数组长度的随机数
    let index = Math.round(Math.random() * ( imgArr.length - 1))

    //返回随机的图片地址
    return imgArr[index]
}
