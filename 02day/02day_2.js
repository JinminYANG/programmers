function solution(s) {
    var answer = '';

    var txt = new Array();
    for(var i=0; i<s.length; i++){
        txt[i] = s.charAt(i);
    }
    txt.sort();

    for(var k = txt.length-1; k>=0; k--){
        answer += txt[k];
    }

    return answer;
}