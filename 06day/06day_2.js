function solution(strings, n) {
    console.log(strings.length);

    for (var i = 0; i < strings.length; i++) {
        for (var k = i + 1; k < strings.length; k++) {
            if (strings[i].charAt(n) > strings[k].charAt(n)) {
                var temp = strings[i];
                strings[i] = strings[k];
                strings[k] = temp;
                console.log(strings);
            }
            if (strings[i].charAt(n) === strings[k].charAt(n)) {
                if(strings[i] > strings[k]){
                    var temp = strings[i];
                    strings[i] = strings[k];
                    strings[k] = temp;
                    console.log(strings);
                }
            }
        }
    }

    return strings;
}

solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"],2);