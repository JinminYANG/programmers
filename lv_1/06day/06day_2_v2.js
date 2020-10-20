function solution(strings, n) {

    for (var i = 0; i < strings.length; i++) {
        for (var k = i + 1; k < strings.length; k++) {
            if(check(strings[i], strings[k],n)){
                var temp = strings[i];
                strings[i] = strings[k];
                strings[k] = temp;
            }
        }
    }
    return strings;
}


function check(string1, string2, i) {
    if (string1.charAt(i) > string2.charAt(i)) return true;
    else return string1.charAt(i) === string2.charAt(i) && string1 > string2;
}

solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"],2);