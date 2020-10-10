// lv.1 - 실패율 재도전.... 성공

function solution(N, stages) {
    let rtn = [];

    let stg_lth = stages.length;

    for (let i = 1; i <= N; i++) {
        let count = 0;
        for (let k = 0; k < stages.length; k++) {
            if (i === stages[k]) {
                count++;
            }
        }
        if (isNaN(count / stg_lth)) {
            rtn.push(0);
        } else {
            rtn.push(count / stg_lth);
        }
        stg_lth -= count;
    }

    console.log(rtn);

    let indexs = [];
    let temp = rtn[0];
    let idx = 0;
    for (let i = 0; i < rtn.length; i++) {
        for (let k = 0; k < rtn.length; k++) {
            if (rtn[k] > temp) {
                temp = rtn[k];
                idx = k;
            }
        }
        indexs.push(idx + 1);
        rtn[idx] = -1;
        temp = rtn[0];
        idx = 0;
    }

    console.log(indexs);

    return indexs;
}

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4, 4, 4, 4, 4]);
solution(8, [1, 2, 3, 4, 5, 6, 7]);