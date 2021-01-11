// lv.2 - 최댓값과 최솟값

function solution(s) {
    let answer = '';

    let string = s.split(' ').sort((a, b) => a - b);
    console.log(string);

    answer += string[0] + ' ' + string[string.length - 1];

    console.log(answer);
    return answer;
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");