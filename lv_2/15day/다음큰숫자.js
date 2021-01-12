// lv.2 - 다음 큰 숫자

function solution(n) {
    let answer = 0;

    let binary = n.toString(2);
    let next = n + 1;

    let whileToBoolean = true;

    while (whileToBoolean) {
        let check = checkOneCount(binary, next);

        if (!check) {
            next += 1;
        } else {
            answer = check;
            whileToBoolean = false;
        }
    }

    console.log(answer);
    return answer;
}

function checkOneCount(binary, next) {
    let num = next.toString(2);

    let maxLength;
    if(binary.length >= num.length){
        maxLength = binary.length;
    } else{
        maxLength = num.length;
    }

    let nToCount = 0;
    let nextToCount = 0;

    for (let i = 0; i < maxLength; i++) {
        if (binary.charAt(i) === '1') {
            nToCount += 1;
        }

        if (num.charAt(i) === '1') {
            nextToCount += 1;
        }
    }

    if (nToCount === nextToCount) {
        return parseInt(num, 2);
    } else {
        return false;
    }
}

solution(15);