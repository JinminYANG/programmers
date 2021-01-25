// lv.2 - JadenCase 문자열 만들기

function solution(s) {
    let string = s.toLowerCase().split(' ');

    let answer = string.map(element => {
        let arr = element.split('');
        if (arr[0] != null) {
            arr[0] = arr[0].toUpperCase();
        }
        return arr.join('');
    }).join(' ');

    return answer;
}

solution('3people unFollowed me');
