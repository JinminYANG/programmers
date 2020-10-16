// lv.1 - 키패드 누르기 (작성중)

function solution(numbers, hand) {
    let rtn = '';

    let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];

    let leftIndex = [[3], [0]];
    let rightIndex = [[3], [2]];
    let centerIndex;

    // console.log(leftIndex);

    function findNumber(numb) {
        for (let i = 0; i < keypad.length; i++) {
            for (let k = 0; k < keypad[0].length; k++) {
                if (keypad[i][k] === numb) {
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
            console.log(leftIndex - centerIndex);
        }
    }


    // for (let k = 0; k < keypad.length; k++) {
    //     for (let j = 0; j < keypad[0].length; j++) {
    //
    //     }
    // }

}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");