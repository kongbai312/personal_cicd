//邮箱校验规则
export const validateMail = ( rule : any , value : any ,callback : any ) => {
    let ruleRegExp = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
    if(value === ''){
        callback(new Error('邮箱不能为空'))
    }
    else if(!ruleRegExp.test(value)){
        callback(new Error('请输入正确的邮箱格式'))
    }
    else{
        callback()
    }
}

//验证码校验规则
export const validateCode = ( rule : any , value : any ,callback : any ) => {
    let ruleRegExp = new RegExp(/^[0-9]{6}$/)
    if(value === ''){
        callback(new Error('验证码不能为空'))
    }
    else if(!ruleRegExp.test(value)){
        callback(new Error('验证码格式有误'))
    }
    else{
        callback()
    }
}