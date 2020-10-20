//lv.1 - 평균 구하기

function solution(arr) {
    let rtn = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        rtn += arr[i];
    }
    console.log(rtn);

    return rtn/arr.length;
}

solution([1, 2, 3, 4]);