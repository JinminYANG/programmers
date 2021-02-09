// lv.2 - N진수 게임

function solution(n, t, m, p) {
    let answer = '';
    let numSet = [];

    // 연속된 숫자 구하기
    for (let i = 0; i < t * m; i++) {
        numSet.push(i.toString(n));
    }

    // 다 이어서 문자열로 만들기
    let numStr = numSet.join('');

    // 말해야하는 숫자 출력하기
    for (let j = 0; j < t * m; j++) {
        // 몇 번째인지에 대한 조건식
        if (j % m === p - 1) {
            answer += numStr[j].toUpperCase();
        }
    }

    console.log(answer);
    return answer;
}

// solution(2, 4, 2, 1);
// solution(16, 16, 2, 1);
solution(16, 16, 2, 2);