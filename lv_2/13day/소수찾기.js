// lv.2 - 소수찾기

function solution(numbers) {
    let answer = 0;

    let arr = numbers.split('').sort((a, b) => b - a);      // numbers를 배열로 변환하고 내림차순으로 정렬
    let max = Number(arr.join(''));     // 내림차순으로 정렬했으니 여러개의 문자를 그대로 합하면 최대값
    let prime = makePrimeNumber(max);   // 최대값을 기준으로 소수를 구함

    for (let i = 2; i <= max; i++) {
        if (prime[i] === false) {     // arr의 i번째의 값이 소수가 아니면 다음 숫자로 넘어간다.
            continue;
        }

        let temp = i.toString().split('');  // i가 소수이면 숫자를 문자열로 바꾸고 배열로 변환한다.

        for (let element of arr) {
            let idx = temp.indexOf(element);     // temp에서 element에 해당하는 인덱스 값을 가져온다.
            if (idx > -1) {                      // temp의 값이 -1보다 클 경우 (값이 temp에 있을 경우)
                temp.splice(idx, 1);   // temp에서 삭제시킨다.
            }
        }

        if (temp.length === 0) {    // temp.length가 0이면 numbers에 모두 있는 숫자이므로 answer에 +=1 해준다.
            answer++;
        }
    }

    return answer;
}

// 소수가 아닌 수에 false 값을 넣어 에라토스테네스의 체를 구현
function makePrimeNumber(max) {
    let arr = [];
    for (let i = 2; i <= max; i++) {
        if (arr[i] === false) {
            continue;
        }
        for (let j = i + i; j <= max; j += i) {
            arr[j] = false;
        }
    }
    return arr;
}