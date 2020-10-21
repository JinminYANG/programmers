// lv.2 - 위장 (성공)

function solution(clothes) {
    let answer = 1;
    let obj = {};  // 중복되는 의상을 처리하기위한 객체 선언

    // ex) A,B,C 세종류가 들어온다면 가능한 모든 조합은 (A+1)(B+1)(C+1)이다.
    // ABC + AB + AC+ BC + A + B + C = (A+1)(B+1)(C+1)
    // 최소 1개는 장착하고 있어야하므로 아무것도 안입고 있는 경우를 생각한 -1

    for (let i = 0; i < clothes.length; i++) {
        if (obj[clothes[i][1]] >= 1) {  // 객체에 이미 같은 키값이 있다면,
            obj[clothes[i][1]] += 1;   // 해당 객체에 +1을 해준다
        } else {
            obj[clothes[i][1]] = 1;   // 객체에 키 값이 없다면 (새로운 종류의 옷(키값))이라면 1로 초기화
        }
    }

    for (let key in obj) {
        answer *= (obj[key] + 1); // 각 옷 종류마다 안입는 경우를 포함
    }

    console.log(answer-1);
    return answer - 1;  // 전체 경우의 수에서 모두 안입는 경우 제외
}


// solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);
// solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]);
solution([["glasses", "face"], ["sunglasses", "face"], ["blue_shirt", "tops"], ["jeans", "bottoms"], ["long_coat", "coat"]]);