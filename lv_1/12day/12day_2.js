function solution(s) {
    let rtn = '';

    if (s.length % 2 !== 0) {
        // let divide = Math.floor(s.length/2);
        // rtn = s.charAt(divide);
        rtn = s.slice(s.length/2, s.length/2 +1);
    }else{
        // let divide = s.length/2;
        // rtn = s.charAt(divide-1);
        // rtn += s.charAt(divide);
        rtn += s.slice(s.length/2 -1, s.length/2 +1);
    }

    console.log(rtn);
    return rtn;``
}

solution("abcde");
solution("qwer");