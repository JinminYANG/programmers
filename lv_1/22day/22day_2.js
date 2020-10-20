// lv.3 - 멀리 뛰기

function solution(n) {
    let count = [1, 2];

    for (let i = 2; i < n; i++) {
        count[i] = (count[i - 1] + count[i - 2]) % 1234567;
    }
    
    let rtn = count[n-1];

    return rtn;
}

solution(4);