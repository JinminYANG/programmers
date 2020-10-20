// lv.1 - 키패드 누르기 (성공!)

function solution(numbers, hand) {
    let rtn = '';

    let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];

    let leftIndex = [[3], [0]];
    let rightIndex = [[3], [2]];
    let centerIndex;

    function findNumber(numb) {
        for (let i = 0; i < keypad.length; i++) {
            for (let k = 0; k < keypad[0].length; k++) {
                if (keypad[i][k] === numb) {
                    // console.log([[i], [k]]);
                    return [[i], [k]];
                }
            }
        }
        return -1;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) {
            leftIndex = [[0], [0]];
            rtn += "L";
        } else if (numbers[i] === 3) {
            rightIndex = [[0], [2]];
            rtn += "R";
        } else if (numbers[i] === 4) {
            leftIndex = [[1], [0]];
            rtn += "L";
        } else if (numbers[i] === 6) {
            rightIndex = [[1], [2]];
            rtn += "R";
        } else if (numbers[i] === 7) {
            leftIndex = [[2], [0]];
            rtn += "L";
        } else if (numbers[i] === 9) {
            rightIndex = [[2], [2]];
            rtn += "R";
        } else {
            centerIndex = findNumber(numbers[i]);

            let leftCompare = Math.abs(centerIndex[0] - leftIndex[0]) + Math.abs(centerIndex[1] - leftIndex[1]);
            let rightCompare = Math.abs(centerIndex[0] - rightIndex[0]) + Math.abs(centerIndex[1] - rightIndex[1]);

            if (leftCompare > rightCompare) {
                rtn += "R";
                rightIndex = centerIndex;
            } else if (leftCompare < rightCompare) {
                rtn += "L";
                leftIndex = centerIndex;
            } else if (leftCompare === rightCompare) {
                if (hand === 'right') {
                    rtn += "R";
                    rightIndex = centerIndex;
                } else if( hand === 'left'){
                    rtn += "L"
                    leftIndex = centerIndex;
                }
            }
        }
    }

    console.log(rtn);
    return rtn;

}

// solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");