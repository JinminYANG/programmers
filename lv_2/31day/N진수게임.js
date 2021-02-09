// lv.2 - N진수 게임

function solution(n, t, m, p) {
    let answer = '';

    for (let i = 0; i <= 1000; i++) {
        if (answer.length === t) {
            break;
        }

        let temp = i.toString(n);
        // console.log(temp);

        if (temp.length > 1) {
            for (let j = 0; j < temp.length; j++) {
                if (temp.charAt(j) % m === p - 1) {
                    answer += j;
                }
            }
        } else {
            if (i % m === p - 1) {
                answer += i;
            }
        }

    }

    console.log(answer);
    return answer;
}

solution(2, 4, 2, 1);
// solution(16, 16, 2, 1);
// solution(16, 16, 2, 2);