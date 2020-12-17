function solution(number, k) {
    let answer;

    let numbers = number;

    let temp = "";
    let tempIndex;
    let num;
    let maxNum = 0;

    function findMaxNumber(number) {
        for (let i = 0; i < number.length; i++) {
            temp = number.charAt(i);
            tempIndex = number.indexOf(temp);
            num = "";
            num = number.substr(0, tempIndex);
            num += number.substr(tempIndex + 1, number.length);

            if (maxNum < num) {
                maxNum = num;
            }

        }
        numbers = maxNum;
        return maxNum;
    }

    for (let i = 0; i < k; i++) {
        answer = findMaxNumber(numbers);
    }

    console.log(answer);

    return answer;
}

solution("1924", 2);
solution("1231234",3);
solution("4177252841",4);