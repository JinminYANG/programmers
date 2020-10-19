// lv.1 - 두 개 뽑아서 더하기

function solution(numbers) {
    let rtn = [];

    function ascendingOrder(a, b) { // 오름차순 정렬 함수
        return a - b;
    }

    numbers.sort(ascendingOrder);

    for (let i = 0; i < numbers.length; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            rtn.push(numbers[i] + numbers[k]);
        }
    }

    rtn.sort(ascendingOrder);

    for (let i = rtn.length - 1; i >= 0; i--) {
        if (rtn[i] === rtn[i - 1]) {
            rtn.splice(i, 1);
        }
    }

    console.log(rtn);
    return rtn;
}

solution([2, 1, 3, 4, 1]);