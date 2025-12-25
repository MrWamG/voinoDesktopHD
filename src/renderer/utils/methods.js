export default {
    // 将数字转换为 M 或者 B 或者 K
    numTransfer(num){
        num = Number(num);
        // 先看有没有 B，再看有没有 M
        const result = (num / 1e9 > 1) ? `${num / 1e9}b` : (num / 1e6 > 1) ? `${num / 1e6}m` : `${num / 1e3}k`;
        let acutalNum = Number(result.substring(0,result.length - 1).toString().match(/^\d+(?:\.\d{0,2})?/));
        return acutalNum + result[result.length - 1];
    },
    getAccessToken(){
        return localStorage.getItem("token") || "";
    }
}
