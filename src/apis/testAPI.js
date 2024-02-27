import http from "@/utils/http"

export function getCategoryAPI () {

    //实际获取的地址--黑马程序员的接口
    //https://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head
    return http.get('home/category/head')
}