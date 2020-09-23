function solution(n) {

    let arr = [];
    let num = n.toString(); // n을 문자형태로 바꿔줌

    console.log(n);
    console.log(num.length);

    for (let i = 0; i < num.length; i++) { // 변수 i를 선언하여 num의 길이만큼 반복
        arr[num.length-(i+1)] = parseInt(num.charAt(i)); // arr의 맨마지막부터 num의 첫글자를 숫자로 변환하여 삽입
    }
    console.log(arr);
    return arr;

}

solution(12345);