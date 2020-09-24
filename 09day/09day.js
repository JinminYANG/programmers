function solution(n, m) {
    let answer = []; // 배열 선언

    let large = (n > m) ? n : m; // 입력된 두 수의 큰 값을 구함
    let small = (n < m) ? n : m; // 입력된 두 수의 작은 값을 구함

    let min, max; // answer에 삽입할 최소, 최대값의 변수 선언

    for (let i = 1; i < large; i++) { // 최대공약수를 구할 반복문
        if (large % i === 0 && small % i === 0) { // 큰 값과 작은 값에 나누어 떨어지는 값 중에 큰 값을 구해 최소값(최대공약수)에 삽입
            min = i;
        }
    }

    max = (large * small) / min; // 최대공약수를 이용하여 최소공배수를 계산

    answer.push(min, max); // answer(배열)에 삽입

    return answer;

}

solution(3, 12);
// solution(2, 5);