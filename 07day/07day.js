function solution(n) {
    let answer = 0; // 개수 세기위한 변수 선언
    let arr = []; // 삽입하여 계산하기 위한 배열 선언

    for (let i = 2; i <= n; i++) { // 제한 조건 2이상의 자연수를 삽입하기 위한 반복문
        arr[i] = i; // 배열의 2번째부터 삽입 (계산하기 편하게 하려고 0번째 부터 안 하는듯)
    }

    console.log(arr);

    for (let i = 2; i <= n; i++) { // 소수를 구하기 위한 반복문
        if (arr[i] === 0) // 배열의 i번째가 0이면
            continue; // 진행
        for (let j = i + i; j <= n; j += i) { // i+i를 j에 대입하고 반복할때 j에 i를 더해줌 ex)j=2+2 =>6 / j+=2 => 6 ... j=3+3 =>6 / j+=3 =>9 ... j=4+4 => 8 / j+=4 =>12
            arr[j] = 0; // ex) 4번째 index 4는 i(2)의 배수이니 0으로 치환, 6번째 index 6은 i(3)의 배수이니 0으로 치환,
        }
    }
    console.log(arr);

    for (let i = 2; i <= n; i++) { // 개수를 구하기 위한 반복분
        if (arr[i] !== 0) // arr의 i번째 수가 0이 아니면 (소수이면)
            answer++; // answer + 1
    }
    console.log(answer);
    return answer // 계산된 개수를 리턴
}

solution(10);