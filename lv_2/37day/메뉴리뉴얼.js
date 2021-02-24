// lv.2 - 메뉴 리뉴얼
/*
    단품으로 제공하던 메뉴를 코스요리 형태로 재구성
    코스요리는 최소 2가지 이상의 단품메뉴로 구성
    최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 후보에 포함
*/

function solution(orders, course) {
    let answer = [];

    for (let k = 0; k < course.length; k++) {
        let arr = [];
        for (let i = 0; i < orders.length; i++) {

            arr.push(getCombinations(Array.from(orders[i]), course[k]));
        }

        let overlaps = overlapToArr(arr);
        let maxOverlaps = findMaxOverlap(overlaps);
        // console.log(maxOverlaps);

        for (let j = 0; j < maxOverlaps.length; j++) {
            answer.push(maxOverlaps[j].replace(/,/gi, ''));
        }
    }

    answer.sort();
    console.log(answer);

    return answer;
}

function findMaxOverlap(arr) {
    const keys = Object.keys(arr);
    let temp = keys[0];

    keys.forEach((value, idx) => {
        if (arr[value] > arr[temp]) {
            temp = value;
        }
    });

    let tempArr = [];
    keys.forEach((value, idx) => {
        if (arr[value] === arr[temp]) {
            if (arr[value] > 1) {
                tempArr.push(value);
            }
        }
    });

    // console.log(tempArr);
    return tempArr;

}

function overlapToArr(arr) {
    const results = {};
    arr.forEach((item) => {
        item.forEach((element) => {
            element = element.sort();
            if (results[element]) {
                results[element] = results[element] + 1;
            } else {
                results[element] = 1;
            }
        });
    });

    return results;
}

function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results;
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);

// solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);

// solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);