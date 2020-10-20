// lv.1 - 정수 내림차순으로 배치하기

function solution(n) {
    let list = n.toString();
    let arr = [];
    let rtn = '';

    for (let i = 0; i < list.length; i++) {
        arr[i] = list.charAt(i);
    }
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        let swap;
        for (let k = 0; k < arr.length - 1 - i; k++) {
            if (arr[k] < arr[k + 1]) {
                swap = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = swap;
            }
        }
    }
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        rtn += arr[i];
    }

    console.log(rtn);
    return Number(rtn);
}

solution(118372);