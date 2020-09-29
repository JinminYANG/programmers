function solution(participant, completion) { // 효율성 테스트 실패
    for (let i = 0; i < completion.length; i++) {
        for (let k = 0; k < participant.length; k++) {
            if (participant[k] === completion[i]) {
                participant.splice(k,1);
                break;
            }
        }
    }
    console.log(participant[0]);
    return participant[0];
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);