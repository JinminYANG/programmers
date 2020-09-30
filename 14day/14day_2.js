// lv.1 - 자릿수 더하기
function solution(n) {
    let answer = 0;
    answer = n.toString();

    let rtn = 0;
    for (let i = 0; i < answer.length; i++) {
        rtn += Number(answer.charAt(i));
    }
    console.log(rtn);

    return rtn;
}

solution(123);