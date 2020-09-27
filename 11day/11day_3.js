function solution(arr) {
    let tmp = 0;
    if (arr.length === 1) {
        return [-1];
    } else {
        for (let i = 1; i < arr.length; i++) {
            if (arr[tmp] > arr[i]) {
                tmp = i;
                console.log(tmp);
            }
        }
        arr.splice(tmp, 1);
    }
    console.log(arr);

    return arr;
}


// solution([4, 3, 2, 1]);
// solution([10]);
// solution([4, 3, 2, 1, 5, 6, 7]);
solution([3,2,4,1]);

