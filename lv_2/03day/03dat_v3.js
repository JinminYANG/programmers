// lv.2 - 프린터 (해결)

function solution(priorities, location) { //중요도, 요청 문서 index
    let target_index = location; // user가 선택한 index를 저장할 변수
    let answer = 1; // 문서가 몇 번째로 추출되는지 계산할 변수
    let first = -1; // 문서가 추출되고 순서를 계산하는데 쓰일 변수

    console.log(target_index);
    while (priorities.length > 0) {
        // 1. 가장 앞에 있는 문서를 추출
        first = priorities.shift();

        // 2. 중요도 높은 문서가 존재 시 뒤로 넣음
        if (priorities.some((value, index) => value > first)) { // priorities에 들어있는 값중에 first보다 큰 값이 하나라도 있으면
            priorities.push(first); // first를 priorities배열에 맨 뒤에 삽입
        }
        // 3. 맨 앞에 추출한 문서(first)가 중요도가 제일 높다면,
        // 사용자가 선택한 문서(target_index)일 경우에는 루프를 중단하고,
        // 아닐 경우에는 answer에 1을 더해준다.
        else {
            if (target_index === 0) {
                break;
            } else {
                answer++;
            }
        }

        /* 3. 사용자가 선택한 문서가 중요도가 제일 높지 않은 경우 // 내가 찾는 문서를 shift 했다가 제일 큰 숫자를 찾았을 경우
              현재 대기목록의 맨 끝으로 index를 옮긴다. */ // push를 했으니까 index는 맨끝으로 이동한다.
        if (target_index === 0) {
            target_index = priorities.length - 1;
        } else { // 배열이 shift와 push에 의해 인덱스가 한칸씩 줄어드니까 -1씩 계산해줌
            target_index--;
        }
    }
    return answer;
}

solution([2, 1, 3, 2], 2);
// solution([1, 1, 9, 1, 1, 1], 0);