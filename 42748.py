def solution(array, commands):
    answer = []
    for c in commands:
        li = array[c[0]-1:c[1]]
        li.sort()
        answer.append(li[c[2]-1])
    return answer


array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
res = solution(array, commands)

print(res)
