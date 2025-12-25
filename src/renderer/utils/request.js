import axios from 'axios'
import methods from "./methods.js"

// 是否显示重新登录
export let isRelogin = { show: false };

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "http://localhost:3000",
    // 超时
    timeout: 30000,
    // 禁用 Cookie 等信息
    withCredentials: false,
})
// request拦截器
service.interceptors.request.use(config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (methods.getAccessToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + methods.getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        let url = config.url + '?';
        for (const propName of Object.keys(config.params)) {
            const value = config.params[propName];
            var part = encodeURIComponent(propName) + "=";
            if (value !== null && typeof (value) !== "undefined") {
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        let params = propName + '[' + key + ']';
                        var subPart = encodeURIComponent(params) + "=";
                        url += subPart + encodeURIComponent(value[key]) + "&";
                    }
                } else {
                    url += part + encodeURIComponent(value) + "&";
                }
            }
        }
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(async response => {
    // 后端拒绝了请求
    if(response.data.code === 400){
        return Promise.reject(response);
    }else{
        // 突破了重重难关，顺利返回数据
        return response.data;
    }
}, error => {
    console.log('err' + error)
    return Promise.reject(error)
})

export default service
