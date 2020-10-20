// lv.2 - 기능개발 (성공)

function solution(progresses, speeds) {
    let rtn = [];   // 몇개의 기능이 배포되는지 리턴할 배열

    while (progresses.length > 0) {   // 작업의 진도가 들어있는 배열(progresses)의 갯수가 0일때 까지 반복
        for (let i = 0; i < progresses.length; i++) {   // 작업의 진도 배열(progresses)를 반복  
            if (progresses[i] < 100) {   // progresses의 i번째가 100보다 작을 때 (진도가 100% 안되었을 때)
                progresses[i] += speeds[i];   // 개발 속도 배열의 i번째 만큼 progresses 배열의 i번째를 더해줌
            }
        }

        let count = 0;   // 기능 작업이 완료된 갯수를 셀 변수
        while (progresses[0] >= 100) {   // progresses의 0번째가 100보다 크거나 같으면 (진도가 100%일 때) / while을 이용하여 뒤에있는 기능 작업까지 확인
            progresses.shift();   // progresses의 0번째를 shift (배열에서 제거)
            speeds.shift();   // speed의 0번째를 shift (배열에서 제거)
            count++;   // 기능 작업 완료 +1 
        }
        if (count > 0) {   // 기능 작업이 완료되어 count에 세어졌을 때 
            rtn.push(count);   // 완료된 작업을 세는 배포될 배열에 push
        }

    }

    return rtn;
}

solution([93, 30, 55], [1, 30, 5]);