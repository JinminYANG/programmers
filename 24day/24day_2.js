// lv.1 - 다트 게임 (실패)

function solution(dartResult) {

    let rtn = [];
    let rtnIndex = 0;
    let currentInt = '';

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult.charAt(i))) {
            currentInt = dartResult.charAt(i);
            // console.log(currentInt);
            if(dartResult.charAt(i) === '0'){
                currentInt = 10;
            }
        } else {
            if (isNaN(dartResult.charAt(i))) {
                if (dartResult.charAt(i) === "S") {
                    currentInt = currentInt * 1;
                    // console.log(currentInt);
                } else if (dartResult.charAt(i) === "D") {
                    currentInt *= currentInt;
                    // console.log(currentInt);
                } else if (dartResult.charAt(i) === "T") {
                    currentInt *= currentInt * currentInt;
                    // console.log(currentInt);
                } else if (dartResult.charAt(i) === "*") {
                    rtn[rtnIndex] *= 2;
                    currentInt *= 2;
                    // console.log(currentInt);
                    rtnIndex++;
                } else if (dartResult.charAt(i) === "#") {
                    currentInt = currentInt * (-1);
                    // console.log(currentInt);
                }
                rtn.push(currentInt);
            }
        }
    }

    console.log(rtn);
}

solution("1S2D*");