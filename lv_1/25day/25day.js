// lv.1 - 키패드 누르기

function solution(numbers, hand) {
    let rtn = "";

    let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];

    let leftIndex = keypad[3][0];
    let rightIndex = keypad[3][2];
    // console.log(leftIndex);
    // console.log(rightIndex);

    let leftZone = [];
    leftZone.push(keypad[0][0], keypad[1][0], keypad[2][0]);
    // console.log(leftZone);
    let rightZone = [];
    rightZone.push(keypad[0][2], keypad[1][2], keypad[2][2]);
    // console.log(rightZone);
    let nothigZone = [];
    nothigZone.push(keypad[0][1], keypad[1][1], keypad[2][1], keypad[3][1]);

    // console.log(nothigZone);

    function compare(a, b) {
        if (isNaN(a)) {
            return b;
        } else if (isNaN(b)) {
            return a;
        } else {
            return a - b;
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            rtn += "L";
            leftIndex = numbers[i];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            rtn += "R";
            rightIndex = numbers[i];
        } else {
            if (numbers[i] === 2) {
                if(!isNaN(leftIndex) && !isNaN(rightIndex)){ // *이나 #이 아닐 때
                    let temp = Math.abs(leftIndex) > Math.abs(rightIndex) ? leftIndex : rightIndex;
                } else if(isNaN(leftIndex)){
                    let temp = rightIndex;
                }

                // console.log(temp);

            }
        }
    }

}

// solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");