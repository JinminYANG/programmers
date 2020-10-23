// lv.2 - 프린터 (해결)

function solution(priorities, location) {
    priorities[location] = priorities[location].toString(); // 숫자를 문자로 바꿔 같은 숫자와 겹치지 않게 해줌
    console.log(priorities);
    let answer = 0; // 몇 번째로 출력하는지 리턴할 변수

    while (priorities.length > 0) { // 대기 목록 배열이 없어질 때 까지 반복
        let target = priorities.shift(); // 배열의 0번쨰를 shift
        let flag = true; // 더 큰 숫자가 존재하는지 판별할 boolean
        for (let item of priorities) {  // 배열을 반복 -> 반복문을 for in으로 돌릴 경우에 type이 string인지 판별하지 못함
            if (item > target) { // 배열안에 target보다 큰 수가 있을 경우에
                priorities.push(target); // target을 배열에 맨 끝으로 삽입
                flag = false; // boolean을 false로 바꿔줌
                break; // 찾았으니까 반복문 나가기
            }
        }
        if (flag === false) { // 더큰 숫자를 찾아 배열의 순서가 바뀌었을 경우에
            continue; // while문(시작점)으로 돌아가기
        }

        answer++; // shift된 0번째 숫자가 제일 큰 숫자여서 flag가 true인 경우에 answer번째로 나오니 1씩 더해줌
        if (typeof target == "string") { // shift한 숫자가 내가 찾는 string(아까 바꿔준)일 경우에
            console.log(answer);
            return answer; // 몇 번째로 shift 되었는지 리턴
        }
    }
    return answer;
}

// solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);