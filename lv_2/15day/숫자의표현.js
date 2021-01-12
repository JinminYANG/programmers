// lv.2 - 숫자의 표현

function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        let temp = i;
        for (let j = i + 1; j <= n; j++) {
            temp += j;

            if (temp === n) {
                answer += 1;
                break;
            } else if (temp > n) {
                break;
            }
        }

        answer += 1;
    }

    return answer;
}

solution(15);