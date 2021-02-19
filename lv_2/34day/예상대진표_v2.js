// lv.2 - 예상대진표
/*
    a와 b의 라운드만 계산하면 되니 다른 것들은 계산할 필요가 없었다.
    반복 조건을 a와 b가 같을 때로 설정하고
    토너먼트 형식이니 절반씩 주는 것을 생각하고 소수가 나올시 올림을 이용하여 정수로 만들어준다.
    반복할때마다 라운드가 올라가는 것이니 answer에 1을 더해준다.
*/

function solution(n, a, b) {
    let answer = 0;

    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}


solution(8, 4, 7);
solution(2000000000,1023163548,2)