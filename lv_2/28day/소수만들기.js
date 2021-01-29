// lv.2 - 소수만들기

function solution(nums) {
    let answer = 0;

    const primeNumbers = getPrimeNumber();
    console.log(primeNumbers);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let test = nums[i] + nums[j] + nums[k];
                if (primeNumbers.includes(test)) {
                    answer += 1;
                }
            }
        }
    }

    console.log(answer);
    return answer;
}

function getPrimeNumber() {
    const result = [];
    for (let i = 1; i <= 3000; i++) {
        let isPrimeNumber = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrimeNumber = false;
            }
        }
        if (isPrimeNumber) {
            result.push(i);
        }
    }
    return result;
}

// solution([1, 2, 3, 4]);
solution([1, 2, 7, 6, 4]);