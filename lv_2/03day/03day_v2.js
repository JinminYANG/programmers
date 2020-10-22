// lv.2 - 프린터v2 (미해결)


function solution(priorities, location) {

    let rtn = 0;
    let wantToPrint = priorities[location];


    for (let i = 0; i < priorities.length - 1; i++) {
        let temp = priorities[0];
        for (let k = i + 1; k < priorities.length - 1; k++) {
            if (temp < priorities[k]) {
                let first = priorities.shift();
                priorities.push(first);
                location--;
            }
        }
    }

    console.log(location + 1);
    return rtn;
}

// solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);