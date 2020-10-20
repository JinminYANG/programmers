function solution(arr) {
    var answer = [];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i+1]){
            answer[index++] = arr[i];
        }
    }
    return answer;
}


function solution_v2(arr){
    var answer = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}