//lv.1 - 행렬의 덧셈

function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        answer.push([]);   // 행렬 전체의 길이(크기) 만큼 answer에 배열을 추가
        for (let k = 0; k < arr1[0].length; k++) {   // 열과 크기가 같은 행렬이므로 첫번째 배열의 첫행 기준으로 반복문 돌림
            answer[i][k] = arr1[i][k] + arr2[i][k];   // 첫번째 배열과 두번째 배열을 합해서 answer에 더해줌
        }
    }

    return answer;
}

solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]);
;