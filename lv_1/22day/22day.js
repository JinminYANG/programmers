// lv.1 - 예산

function solution(d, budget) {

    let rtn;
    let moneyForBudget = 0;   // 예산에 맞는 금액인지 측정하기 위한 변수
    let count = 0; // 몇 개의 부서에 전달할 수 있는지 세는 변수
    let d_index; // 지급된 부서가 또 계산될 방지를 위한 변수

    function ascending(a, b) {
        return a - b;
    }

    d.sort(ascending);
    for (let i = 0; i < d.length; i++) { // 부서의 수만큼 반복
        //if (!(moneyForBudget >= budget)) { // 예산보다 작을 경우에만 실행하기 위한 조건문
        let temp = d[i]; // 비교를 위한 변수 선언과 i번째 값 대입
        d_index = i; // 인덱스 값을 i번째로 대입
        if (d[i] !== 0) { // 부서의 값이 0이 아닌경우에만 실행하기 위한 조건문
            for (let k = i + 1; k < d.length; k++) { // 가장 작은 값 찾기위한 반복문
                if (temp > d[k]) {
                    temp = d[k];
                    d_index = k;
                }
            }
            if ((moneyForBudget + temp) > budget) {
                break;
            } else {
                moneyForBudget += temp;
                d[d_index] = 0;
                count++;
            }
        }
    }

    console.log(count);
    return count;
}

solution([1, 3, 2, 5, 4], 9);
solution([1, 2, 3, 4, 5], 9);
solution([5, 4, 3, 2, 1], 9); // 이거다 시ㅡ발