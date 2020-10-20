// lv.2 - 피보나치 수

function solution(n) {
    let rtn = 0;

    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
    }
    // 모듈러 연산의 성질
    // 숫자 A, B, C가 있다고 하면 " (A + B) % C " 의 값은 " ( ( A % C ) + ( B % C) ) % C " 와 같다는 성질

    console.log(fibonacci);

    rtn = fibonacci[n];

    console.log(rtn);
    return rtn;

}

solution(3);
solution(5);
solution(44);