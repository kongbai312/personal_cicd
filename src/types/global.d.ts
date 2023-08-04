//声明live2d
interface Window {
    L2Dwidget: function,
    //声明滚动条实例 
    scrollRef : {
        scrollLeft: number,
        scrollTop: number,
        scrollTo : ( number ,number) => void,
        setScrollTop : (scrollTop: number) => void,
        setScrollLeft: (scrollLeft: number) => void,
    }
}  