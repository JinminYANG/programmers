// lv.1 - 실패율

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
    for (let i = 0; i < answer.length; i++) {
        let swap = 0;
        for (let k = 0; k < answer.length; k++) {
            if (answer[k] > answer[k - 1]) {
                swap = k;
            }
        }
        rtn.push(swap);
        console.log(answer);
        answer[swap] = null;
    }

    console.log(rtn);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4,4,4,4,4]);