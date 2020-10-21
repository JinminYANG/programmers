// lv.2 - 위장 (실패)

function solution(clothes) {
    let rtn = 0;

    // console.log(clothes);
    // console.log(clothes[0].length);
    // console.log(clothes[0+2][1]);

    rtn += clothes.length;   // 하나씩 입을 수 있는 거 그냥 집어넣어줌

    let temp
    for (let i = 0; i < clothes.length; i++) {     // 1+1 조합까지 반복문
        temp = clothes[i][1];
        // console.log(temp);
        for (let k = i + 1; k < clothes.length; k++) {
            let tmp2 = clothes[k][1];
            if (clothes[i][1] !== clothes[k][1]) {
                // console.log(clothes[i][0] , clothes[k][0]);
                rtn += 1;
            }
            if(k < clothes.length-1){
                if(clothes[i][1] !== clothes[k][1] && clothes[i][1] !== clothes[k][1] !== clothes[k+1][1]){
                    let tmp3 = clothes[k+1][1];
                    // console.log(clothes[i][0] , clothes[k][0], clothes[k+1][0]);
                    rtn += 1;
                }
            }
        }
    }

    console.log(rtn);

    let two_cloth;




    return rtn;
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
// solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]);
// solution([["glasses", "face"], ["sunglasses", "face"], ["blue_shirt", "tops"], ["jeans", "bottoms"], ["long_coat", "coat"]]);