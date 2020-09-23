function solution(s) {
    let answer = '';

    let str = s;
    let str_sp = str.split(" ");
    console.log(str_sp);

    for (let k = 0; k < str_sp.length; k++) {
        for (let j = 0; j < str_sp[k].length; j++) {
            if(j%2===0){
                answer += str_sp[k].charAt(j).toUpperCase();
            }else{
                answer += str_sp[k].charAt(j).toLowerCase();
            }
        }
        answer += " ";
    }

    console.log(answer);
    return answer;
}

solution("try hello world");