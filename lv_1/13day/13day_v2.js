function solution(participant, completion) {
    participant.sort();  // 참가자들을 정렬
    completion.sort();   // 완주자들을 정렬

    for (let i = 0; i < participant.length; i++) {   // 참가자들 반복
        if (participant[i] !== completion[i]) {  // 참가자들 중에 완주자에 없는 이름을 찾아 
            return participant[i]; // 리턴
        }
    }
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);