function solution(numbers, target) {
    let answer = 0;

    dfs(0, 0);  // dfs 시작

    function dfs(index, sum) {
        if(index === numbers.length) {  // 만약 index가 number의 길이와 같을 때 (끝에 도달했을 때)
            if (sum === target) {   // 만약 sum이 target으로 설정된 값과 같을 때
                answer += 1;   // 몇 개인지 세줄 answer에 +1 해줌
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    return answer;
}

solution([1, 1, 1, 1, 1], 3);