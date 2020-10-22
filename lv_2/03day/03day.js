// lv.2 - 프린터 (미해결)

function solution(priorities, location) {

    let rtn = 0;
    let wantToPrint = priorities[location];
    // console.log(wantToPrint);


    while (priorities.length !== 0) {
        // console.log(priorities);
        let temp = priorities.shift();  // 인쇄목록 가장 앞에있는 문서(J)를 꺼냄
        // console.log(temp);
        // console.log(priorities);
        // console.log("");
        for (let i = 0; i < priorities.length - 1; i++) {  // 나머지 목록에서 J보다 높은 문서가 있는지 반복
            if (temp < priorities[i]) {   // J보다 높은 문서가 있으면
                priorities.push(temp);   // J를 대기목록 맨끝에 삽입
                break;
            }
        }
    }


    return rtn;
}

solution([2, 1, 3, 2], 2);