function solution(seoul) {
    var answer = '', i = 0;

    while (i<seoul.length){
        if(seoul[i] == "Kim"){
            answer += ("김서방은 " + i +"에 있다");
            break;
        }
        i++;
    }
    return answer;
}

function solution(seoul) {
    var answer = '', i = 0;

    while (i<seoul.length){
        (seoul[i] == "Kim") ? answer += ("김서방은 " + i +"에 있다") : i++;
    }
    return answer;
}