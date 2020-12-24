// lv.2 - 위장_v2
function solution(clothes) {
    let answer = 1;
    let object = {};

    for (let index = 0; index < clothes.length; index += 1) {
        if (object[clothes[index][1]] >= 1) {
            object[clothes[index][1]] += 1; // 객체에 키값이 존재하면 +1을 해준다.
        } else {
            object[clothes[index][1]] = 1;  // 객체에 키값이 존재하지 않으면 1로 만들어준다.
        }
    }

    for (let key in object) {
        answer *= (object[key] + 1);  // 각 옷 종류마다 안입는 경우가 있기에 +1 한 값들을 곱해주면 모든 경우의 수가 만들어진다.
    }

    return answer - 1;  // 옷을 하나라도 안입는 경우는 없으니 경우의 수 에서 -1 을 빼준다.
}

// solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
// solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]);
console.log(solution([["circle_glasses", "face"], ["black_sunglasses", "face"], ["blue_tShirt", "top"], ["jeans", "bottom"], ["long_coat", "jacket"]]));
