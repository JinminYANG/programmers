function solution(brown, yellow) {
    let answer = [];

    let count = Math.sqrt(brown + yellow);
    let x, y;
    if (Number.isInteger(count)) {
        x = count;
        y = count;
        answer.push(x);
        answer.push(y);
    } else {
        x = Math.floor(count);
        y = Math.floor(count);
        while (x * y !== brown + yellow) {
            x += 1;
        }

        answer.push(x, y);
    }
    console.log(answer);
    return answer;
}

// solution(10, 2);
// solution(8, 1);
// solution(24, 24);
solution(50,22);