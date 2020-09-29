function solution(s, n) {
    let str = [];
    let rtn = '';
    for (let i = 0; i < s.length; i++) {
        str[i] = String.fromCharCode(s.charCodeAt(i) + n);
        rtn += str[i];
    }
    console.log(str);
    console.log(rtn);
    
    return rtn;
}

solution("AB", 1);