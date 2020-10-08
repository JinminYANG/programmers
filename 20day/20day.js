// lv.1 - 실패율 - 19day 이어서..

function solution(N, stages) {
    let answer = [];
    for (let k = 1; k <= N; k++) {
        let i = 0;
        let count = 0;
        let arr = [];
        for (i in stages) {
            if (k === stages[i]) {
                count++;
                arr.push(Number(i));
            }
        }
        answer.push(count / stages.length);
        console.log(arr);

        for (let j = arr.length - 1; j >= 0; j--) {
            stages.splice(arr[j], 1);
        }
    }

    console.log(answer);

    let rtn = [];
    for (let i = 0; i < answer.length-1; i++) {
        let swap = 0;
        for (let k = 0; k < answer.length; k++) {
            if (answer[k] > answer[k - 1]) {
                swap = k;
            }
        }
        if (answer[swap] !== 0) {
            rtn.push(swap + 1);
            console.log(answer);
            answer[swap] = null;
        }
    }


    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === 0) {
            rtn.push(i + 1);
        }
    }

    console.log(rtn);
    return rtn;
}

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4, 4, 4, 4, 4]);
solution(8, [1, 2, 3, 4, 5, 6, 7]);