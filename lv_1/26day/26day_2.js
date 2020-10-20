// lv.1 - 3진법 뒤집기

function solution(n) {
    let rtn = '';

    let base = n.toString(3);
    console.log(base);

    for (let i = base.length - 1; i >= 0; i--) {
        rtn += base.charAt(i);
    }

    // console.log(parseInt(rtn, 3));
    //parseInt(rtn, 3);
    // rtn.toString(10);

    return parseInt(rtn, 3);
}

solution(45);