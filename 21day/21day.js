// lv.1 - 실패율 재도전.... 성공

function solution(N, stages) {
    let rtn = [];

    let stg_lth = stages.length; // stages 길이 저장

    for (let i = 1; i <= N; i++) { // 스테이지 수 만큼 반복
        let count = 0; // 사람들 셀 count 변수
        for (let k = 0; k < stages.length; k++) { // stages에서 N에 도달한 사람들 세기 위한 반복문
            if (i === stages[k]) {  // 스테이지와 도전단계가 같다면
                count++; // 사람+1
            }
        }
        if (isNaN(count / stg_lth)) { // 스테이지 자체에 도달하지 못한 사람이 있을 경우 (사람/스테이지 길이)
            rtn.push(0); // (0/0) 이 NaN으로 되버려 그냥 0으로 삽입
        } else { // (0/0)이 아닌 경우 스테이지에 도달한 사람이 있는 경우
            rtn.push(count / stg_lth); // (사람수 / 스테이지 길이)실패율로 배열에 집어넣음
        }
        stg_lth -= count; // 스테이지에 도달한 사람을 세었으니 다음 스테이지를 계산하기 위해 스테이지 길이를 사람 수 만큼 빼줌
    }

    console.log(rtn); // 실패율 확인용

    let indexs = []; // 실패율의 크기 순서대로 출력할 배열 indexs 선언
    let temp = rtn[0]; // 실패율을 계산하기 위한 temp에 rtn배열의 0번째 값을 삽입
    let idx = 0; // rtn배열의 인덱스를 저장할 변수
    for (let i = 0; i < rtn.length; i++) { // rtn의 길이만큼 반복 (실패율 큰수 찾기 위해)
        for (let k = 0; k < rtn.length; k++) { // rtn의 길이만큼 반복 (실패율 큰수 찾기 위해)
            if (rtn[k] > temp) { // temp에 저장되어있는 수보다 rtn의 k 번째에 있는 수가 크다면
                temp = rtn[k]; // temp에 rtn의 k번째 수 저장 (이후에도 확인해야하니 temp에 저장하는 거)
                idx = k; // k번째 를 인덱스를 저장할 idx에 저장
            }
        }
        indexs.push(idx + 1); // 1번째부터 삽입해야하니 idx에 1을 더해줌
        rtn[idx] = -1; // 실패율을 계산해야하니 삽입한 rtn의 idx 값을 -1로 삽입해줌
        temp = rtn[0]; // 다시 temp에 rtn 0번째 값 삽입
        idx = 0; // 다시 idx를 0으로 초기화
    }

    console.log(indexs);

    return indexs;
}

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4, 4, 4, 4, 4]);
solution(8, [1, 2, 3, 4, 5, 6, 7]);