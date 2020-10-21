// lv.2 - 위장 (실패)

function solution(clothes) {
    let rtn = 0;

    // console.log(clothes);
    // console.log(clothes.sort());

    rtn += clothes.length; // 1개만 착용했을 때
    let twoClothes = [];
    for (let i = 0; i < clothes.length; i++) {     // 1+1 조합까지 반복문
        // temp = clothes[i][1];
        // console.log(temp);
        for (let k = i + 1; k < clothes.length; k++) {
            let tmp2 = clothes[k][1];
            if (clothes[i][1] !== clothes[k][1]) {
                twoClothes.push([clothes[i][1], clothes[k][1]]);
                // console.log(clothes[i][0] , clothes[k][0]);
                rtn += 1;
            }
        }

        for (let k = 0; k < twoClothes.length; k++) {

        }
    }
    console.log(twoClothes);


    console.log(rtn);
    return rtn;
}


solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
// solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]);
// solution([["glasses", "face"], ["sunglasses", "face"], ["blue_shirt", "tops"], ["jeans", "bottoms"], ["long_coat", "coat"]]);