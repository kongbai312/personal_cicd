# 前端实现APP唤醒

## 一.方式

——**URL Scheme（通用）**

各平台的兼容性也很好，它一般由协议名、路径、参数组成。这个一般是由Native开发的同学提供，我们前端同学再拿到这个scheme之后，就可以用来打开APP或APP内的某个页面了。

URL Scheme 组成

[scheme:] [//authority] [path] [?query] [#fragment]

常用APP的 URL Scheme APP 

微信 支付宝 淘宝 QQ 知乎 URL Scheme 

weixin:// alipay:// taobao:// mqq:// zhihu://

## 二.使用

```javascript
let url = "weixin://";
window.location.href = url
```

具体项目使用参考

```
const appWakeUp = ( url : string , downloadUrl : string = '' ) => {  
    //定时器
    let timer : any = null
    //设置定时器，如果delay秒后提示如果还未打开app，跳转下载页
    const goDownLoad = ( delay : number) => {
      // 开启定时器
      timer = setTimeout(async () => {
        try {
          // 弹窗提示
          await showConfirmDialog({
            title: '如果App没有打开，请点击下载前往安装',
            confirmButtonText:'下载'
          })
          //跳转至下载页
          downloadUrl === '' || (window.location.href = downloadUrl as string)
        } catch (error) {
          //取消
          message.fail('取消下载')
        }finally{
          // 销毁定时器
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
        }
      }, delay)
    }

    //app唤醒
    window.location.href = url
    //3s后提示前往下载页
    goDownLoad(3000)
  }
```

