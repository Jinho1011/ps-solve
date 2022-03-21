patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
]

def solution(answers):
    answer = []
    counts = [0,0,0]
    
    for i in range(0, len(answers)):
        for j in range(0, len(patterns)):  
            if answers[i] == patterns[j][i%len(patterns[j])]: counts[j]+=1
    
    for i in range(0,len(counts)):
        if counts[i] == max(counts): answer.append(i+1)

    return answer

answers = [1,2,3,4,5]
res = solution(answers)

print(res)