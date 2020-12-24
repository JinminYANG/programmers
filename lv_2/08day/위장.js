// lv.2 - 위장

function solution(clothes) {
    let count = clothes.length;

    for (let index = 0; index < clothes.length; index += 1) {
        for (let k = index + 1; k < clothes.length; k += 1) {
            if (clothes[index][1] !== clothes[k][1]) {
                count += 1;
            }
        }
    }

    console.log(count);
    return count;
}


// solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
// solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]);
solution([["circle_glasses", "face"], ["black_sunglasses", "face"], ["blue_tShirt", "top"], ["jeans", "bottom"], ["long_coat", "jacket"]]);
