//문자열 다루기 기본

function solution(s) {
    if(s.length == 4 || s.length == 6){
        for(var i=0; i<s.length; i++){
            var result = s.charAt(i);
            if(!isNaN(result)==false){
                return false;
            }
        }
        var answer = true;
        return answer;
    }else{
        return false;
    }
}