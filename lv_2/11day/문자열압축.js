/*

 1부터 문자열 크기의 절반 개수까지인 i개 단위로 모두 압축해본다.
 j는 i부터 시작하는데, j-i부터 i개의 문자와 j부터 i개의 문자가 같으면 압축이 가능하다. 압축이 가능하면 카운터를 1 증가시킨다.
 만약 압축이 안된다면 압축 횟수와 문자를 그대로 붙인다. 만약 압축 횟수가 1이라면 문자만 붙인다.
 j는 i 만큼씩 증가시킨다.
 i개씩 문자열을 압축시키면 끝에 남는 문자열이 있는데, 이 문자열은 그대로 붙인다.

*/

function solution(s) {
    let answer = 0;
    let stringToArray = [];

    // 가능한 단위 수 = 1 ~ 문자열의 개수/2
    // 각 단위수에서 압축된 문자열 구하기
    for (let i = 0; i < s.length / 2; i += 1) {
        let num = i + 1;    // 압축 기준 단위 수
        let count = 1;      // 동일한 문자가 몇 번 반복되는지
        let newString = '';

        for (let j = 0; j < s.length; j = j + num) {    // 하나의 단위에 대한 반복문
            let currentString = s.substring(j, j + num);   // 현재 압축될 문자 (j번째부터 j+num번째 까지 압축)
            let nextString = s.substring(j + num, j + num + num);   // 압축된 문자 다음에 같은지 확인할 문자 (j+num번째 부터 j+num+num번째 까지 압축)

            if (currentString === nextString) { // 만약 현재 검사하고 있는 압축된 문자와 다음에 올 문자가 같은 경우
                count += 1; // count를 더하여 몇개인지 세준다.
            } else {    // 만약 다음 문자와 같지 않을 경우
                if (count !== 1) {  // count가 1이 아닐 경우 (같은 문자가 반복된 경우가 있는 경우)
                    newString = newString + count + currentString;  // newString 문자열 변수에 원래 담겨져 있던 newString에 더하여 숫자와 현재 압축된 문자를 넣어준다.
                } else {    // count가 1일 경우 (같은 문자가 반복되지 않은 경우)
                    newString = newString + currentString;  // newString 문자열 변수에 원래 담겨져 있던 newString와 현재 압축된 문자를 넣어준다.
                }
                count = 1;  // 다음 문자 반복을 위해 count를 1로 초기화 시켜준다.
            }
        }

        stringToArray.push(newString.length);   // 문자열의 길이를 비교할 배열에 끝까지 계산하여 압축된 문자의 길이를 삽입해준다.
    }

    // 문자열의 길이가 담겨있는 배열을 오름차순으로 정렬하여 작은 숫자가 맨 앞으로 오게 정렬해줌
    stringToArray.sort(function (a, b) {
        return a - b;
    });

    answer = stringToArray[0]; // 가장 작은 숫자를 answer에 대입

    return answer;
}


console.log(solution("aabbaccc"));