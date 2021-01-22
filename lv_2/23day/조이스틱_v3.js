// lv.2 - 조이스틱 (성공)

function solution(name) {
    const arr = [0];

    const answer = [...name].reduce((answer, s, i) => {
        // 1. 현재 값이 'A'일 때 왼쪽으로 되돌아가는 것이 빠른지, 오른쪽으로 진행하는것이 빠른지 계산하기위한 if문
        if (s === 'A') {    // 현재 값이 'A'일 때,
            if (name[i - 1] !== 'A') {  //  그전의 값이 'A'가 아니면
                arr.push(continuous(name.substring(i)) - (i - 1));  // 'A'가 몇개나 연속되는지 구한다. 그리고 현재 i(index)에서 -1 한 값을 넣어준다.
            }
            return answer + 1;  // 오른쪽으로 1칸 이동했으므로 answer에 1을 더해준다.
        }
        return answer + ascii(name, i) + 1;
    }, 0);

    return answer - Math.max(...arr) - 1;   // index가 0일 때도 이동했으므로 -1을 해준다.
}

// 문자를 아스키코드로 변환하기위한 함수
function ascii(name, i) {
    const num = name.charCodeAt(i); // 문자를 아스키코드로 변환
    if (num > 78) { // 알파벳의 중간 문자인 'N'을 기준으로 나눈다.
        return 91 - num;    // 역순으로 계산
    } else {
        return num - 65;    // 순차적으로 계산
    }
}

// 'A'가 몇개나 반복되는지 세기위한 함수
function continuous(name) {
    let repeat = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] !== 'A') {
            break;
        }
        repeat++;
    }

    return repeat;
}

// console.log(solution("JAZ"));
console.log(solution("PRAAAAM"));