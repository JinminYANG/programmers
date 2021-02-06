// lv.2 - 포켓몬

function solution(nums) {
    nums.sort((a, b) => a - b);

    let selectArray = [];
    selectArray.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (selectArray.length === nums.length / 2) {
            break;
        } else {
            if (!selectArray.includes(nums[i])) {
                selectArray.push(nums[i]);
            }
        }
    }

    return selectArray.length;
}

solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);