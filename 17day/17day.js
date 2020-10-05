//lv.1 - x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
    let rtn = [];

    for (let i = 1; i <= n; i++) {
        rtn.push(i*x);
    }
    console.log(rtn);
}

solution(2,5);
solution(4,3);
solution(-4,2);