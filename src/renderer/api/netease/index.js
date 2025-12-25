import request from "@/utils/request.js"

export function trackAll(params){
    return request({
        url: "/playlist/track/all",
        method: 'get',
        params,
    })
}