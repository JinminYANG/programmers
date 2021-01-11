// lv.2 - 최솟값 만들기

function solution(A, B) {
    let answer = 0;

    let arrayA = A.sort((a, b) => a - b);
    let arrayB = B.sort((a, b) => b - a);

    for (let i in A) {
        answer += A[i] * B[i];
    }

    return answer;
}

solution([1, 4, 2], [5, 4, 4]);