// lv.1 - 정수 제곱근 판별

function solution(n) {
    if (n > 0) {
        let num = parseInt(Math.sqrt(n)); // n의 제곱근을 정수로 변환
        console.log(num);
        let rtn = (num * num === n) ? (num + 1) * (num + 1) : -1;
        console.log(rtn);
        return rtn;
    }else{
        console.log(-1);
        return -1;
    }
}


solution(50000000000000);