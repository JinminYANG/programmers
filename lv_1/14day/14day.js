// lv.1 - 약수의 합
function solution(n) {
    let rtn = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            rtn += i;
        }
    }

    console.log(rtn);
    return rtn;
}

solution(5);