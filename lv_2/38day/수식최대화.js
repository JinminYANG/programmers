// lv.2 - 수식 최대화

/*
    숫자들과 3가지의 연산문자 (+,-,*)만으로 이루어진 연산 수식이 전달
    수식에 포함된 연산자의 우선순위를 자유럽게 재정의하여 만들 수 있는 가장 큰 숫자를 제출

    단, 연산자의 우선순위를 새로 정의할 때 같은 순위의 연산자는 없어야 한다
    ( + > - > * ) 또는 ( - > * > +) 과 같이 정의할 수 있으나
    (( +, * ) > -) 또는 ( * > ( + , - )) 처럼 2개 이상의 연산자다 동일한 순위를 가지도록 정의할 수는 없음

    수식에 포함된 연산자가 2개라면 정의할 수 있는 연산자 우선순위 조합은 2! (2가지), 연산자가 3개라면 3!(6가지) 조합이 가능하다
    결과가 음수라면 절댓값으로 변환하여 제출

    ! 같은 연산자끼리는 앞에 있는 것의 우선순위가 더 높다.
*/
let separate;

function solution(expression) {
    let modification = getToken(expression)[0];
    separate = getToken(expression)[1];

    perm(modification, 0, modification.length, modification.length, separate);

    let max = results.reduce((prev, curr) => {
        return Math.abs(prev) > Math.abs(curr) ? prev : curr;
    });

    return Math.abs(max);
}

let results = [];
let resultsIdx = 0;

function getCalculate(array, separate) {
    let separateCopy = [...separate];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < separateCopy.length; j++) {
            if (array[i] === separateCopy[j]) {
                let temp = eval(separateCopy[j - 1] + array[i] + separateCopy[j + 1]);
                separateCopy.splice(j - 1, 1);
                separateCopy[j] = temp;
                separateCopy.splice(j - 1, 1);
                j--;
            }
        }
    }
    results[resultsIdx++] = separateCopy;
}


function perm(array, depth, n, k) {
    if (depth === k) {
        getCalculate(array, separate);
        return;
    }
    for (let i = depth; i < n; i++) {
        swap(array, i, depth);
        perm(array, depth + 1, n, k);
        swap(array, i, depth);
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function getToken(expression) {
    const modification = [];
    const separate = [];

    let temp = '';

    for (let i = 0; i < expression.length; i++) {
        let curr = expression.charAt(i);
        if (curr === '*' || curr === '+' || curr === '-') {
            if (!modification.includes(curr)) {
                modification.push(curr);
            }
            separate.push(temp);
            temp = '';
            separate.push(curr);
        } else {
            temp += curr;
        }
    }
    separate.push(temp);

    return [modification, separate];
}


solution("100-200*300-500+20");
