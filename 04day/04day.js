function solution(s){
    var text = s.toLowerCase();
    var answer = true;

    var arr  = new Array();

    for(var i =0; i<text.length; i++){
        arr[i] = text.charAt(i);
    }
    var p_count = 0;
    var y_count = 0;
    for(var k =0; k<arr.length; k++){
        if(arr[k]=="p"){
            p_count += 1;
        }else if(arr[k] =="y"){
            y_count += 1;
        }
    }

    if(p_count == y_count){
        answer = true;
    }else{
        answer = false;
    }
    console.log(answer);

    return answer;
}

solution("pPpyy");
solution("PyyyyppppY");