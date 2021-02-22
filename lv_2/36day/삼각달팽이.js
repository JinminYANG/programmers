function solution(n) {
    let answer = [];
    let maxNum = max(n);
    console.log(maxNum);
    let count = 1;

    // for (let i = 1; i < maxNum; i++) {
    for (let j = 0; j <= n; j++) {
        answer.push([]);
        for (let k = 0; k <= j; k++) {
            if (k >= 1) {
                answer[j][k] = maxNum - (j + k);
            } else {
                answer[j][k] = count;
                count++;
            }
        }
    }
    // }

    console.log(answer);
    return answer;
}

function max(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result += i;
    }
    return result;
}

solution(4);