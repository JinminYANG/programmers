function solution(number, k) {
    let answer = "";

    let stack = [];

    for (let i = 0; i < number.length; i++) {
        let element = number[i];

        while (k > 0 && stack[stack.length - 1] < element) {
            stack.pop();
            k--;
        }
        stack.push(element);
    }

    stack.splice(stack.length-k, k);
    answer = stack.join("");

    console.log(answer);
    return answer;
}

solution("1924", 2);
solution("1231234", 3);
solution("4177252841", 4);