// lv.2 - 땅따먹기

function solution(land) {
    let answer = 0;

    const dp = Array(land.length).fill(null).map(() => Array(4).fill(0));   // 행의 길이가 land.length, 열의 길이가 4인 배열 생성

    for (let i = 0; i < 4; i++) {
        dp[0][i] = land[0][i];  // dp의 0번째 행에 land 0번째행으로 대입
    }

    for (let i = 1; i < land.length; i++) { // 행 반복
        for (let j = 0; j < 4; j++) {       // 열 반복
            for (let k = 0; k < 4; k++) {   // 겹치지 않기 위한 열 반복
                if (j !== k) {              // 같은 열이 아닐 경우
                    dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + land[i][j]);   // dp[i][j]의 값과 현재 계산하는 dp[i-1][k]+ land[i][j] (계산하는 행렬 값)을 비교하여 큰 값을 dp[i][j]에 대입
                }
            }
        }
    }
    
    for (let i = 0; i < 4; i++) {
        answer = Math.max(answer, dp[land.length - 1][i])
    }

    return answer;
}

// solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]);
// console.log(solution([[7, 6, 2, 1], [4, 3, 2, 1], [4, 8, 5, 4]]));
solution([[1, 2, 3, 5], [5, 6, 7, 100], [4, 3, 2, 1]]);