//lv.1 - 하샤드 수

function solution(x) {
    let answer = true;
    let num = x.toString();
    let arr = [];

    for (let i = 0; i < num.length; i++) {
        arr[i] = num.charAt(i);
    }

    let divide = 0;
    for (let k = 0; k < arr.length; k++) {
        divide += Number(arr[k]);
    }

    if (x % divide === 0) {
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}

solution(10)