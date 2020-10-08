// lv.1 - 실패율 - 19day 이어서.. v2

function solution(N, stages) {
    let answer = [];

    let stageAll = stages.length;

    for (let i = 1; i < N + 1; i++) {
        let count = 0;
        for (let k = 0; k < stages.length; k++) {
            if (stages[k] === i) {
                count++;
            }
        }
        answer.push(count / (stageAll));
        stageAll -= count;
    }
    console.log(answer);


    let rtn = [];
    stageAll = answer.length;
    for (let i = 0; i < stageAll; i++) {
        let temp = 0;
        for (let k = 0; k < answer.length; k++) {
            if (answer[k] > answer[k - 1]) {
                temp = k;
            }
        }
        rtn.push(temp + 1);
        answer.splice(temp, 1);
    }
    console.log(rtn);
}

// solution(8, [1, 2, 3, 4, 5, 6, 7]);
// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4]);