// lv.2 - 뉴스 클러스터링

function solution(str1, str2) {
    let answer = 1;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let arr1 = divide(str1);
    let arr2 = divide(str2);


    const intersection = [];
    const union = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) {
            intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
        }
        union.push(arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        union.push(arr1[i]);
    }

    if (union.length === 0) {
        answer = 65536;
    } else {
        answer = Math.floor((intersection.length / union.length) * 65536);
    }
    return answer;
}

function divide(str) {
    const regExp = /^[a-zA-Z]+$/;
    const arr = [];

    for (let i = 0; i < str.length; i++) {
        let subString = str.substring(i, i + 2);
        if (regExp.test(subString)) {
            arr.push(subString);
        }
    }

    return arr;
}

solution('FRANCE', 'french');
solution("handshake", "shake hands");
solution("aa1+aa2", "AAAA12");
solution('E=M*C^2', 'e=m*c^2');

