// lv.2 - 캐시 (Least Recently Used Algorithm)

function solution(cacheSize, cities) {
    let answer = 0;
    let arr = [];

    cities = cities.map((element) => element.toUpperCase());
    // console.log(cities);


    if (cacheSize === 0) {
        return cities.length * 5;
    }

    for (let i = 0; i < cities.length; i++) {
        const index = arr.findIndex((element) => element === cities[i]);
        // console.log(index);
        if (index !== -1) {
            arr.splice(index, 1);
            answer += 1;
        } else if (arr.length === cacheSize) {
            arr.shift();
            answer += 5;
        } else {
            answer += 5;
        }
        arr.push(cities[i]);
    }


    return answer;
}

solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']);