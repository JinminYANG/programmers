// lv.2 - H-Index

let citationsToBoolean = [];

function solution(citations) {
    let hIndex = 0;
    makeCitationsToBoolean(citations.length);

    // let check = checkCitations();

    for (let h = 0; h < citationsToBoolean.length + 1; h += 1) {
        for (let index = 0; index < citations.length; index += 1) {
            if (citations[index] >= h) {
                citationsToBoolean[index] = true;
            } else {
                citationsToBoolean[index] = false;
            }
        }
        // console.log(citationsToBoolean);

        let check = checkCitations();
        if (check[0] >= h && check[1] <= h) {
            hIndex = h;
        }
    }
    console.log(hIndex);

    return hIndex;
}

function checkCitations() {
    let countArray = [0, 0];

    for (let index = 0; index < citationsToBoolean.length; index += 1) {
        if (citationsToBoolean[index] === true) {
            countArray[0] += 1;
        } else {
            countArray[1] += 1;
        }
    }

    return countArray;
}

function makeCitationsToBoolean(citations_length) {
    for (let index = 0; index < citations_length; index += 1) {
        citationsToBoolean[index] = false;
    }
}

// solution([3, 0, 6, 1, 5]);
// solution([1]);
// solution([22, 42]);
// solution([10, 9, 4, 1, 1]);
solution([2, 2]);