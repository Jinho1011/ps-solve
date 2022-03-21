from sys import stdin
import math


def solution(s):
    answers = []
    if(len(s) == 1):
        return 1
    for i in range(1, int(len(s)/2)+1):
        parts = []

        for j in range(0, math.ceil(len(s) / i)):
            parts.append(s[i*j:i*j+i])

        idx = 0
        comp = []
        while idx < len(parts):
            cnt = 1
            for k in range(idx, len(parts)-1):
                if parts[k] == parts[k+1]:
                    cnt += 1
                else:
                    break
            if cnt > 1:
                comp.append(str(cnt))
                comp.append(parts[idx])
                del parts[idx+1:idx+cnt]
            else:
                comp.append(parts[idx])
            idx += 1
        # print(comp)
        # print(''.join(comp))
        answers.append(len(''.join(comp)))

    return min(answers)


if __name__ == '__main__':
    word = stdin.readline().strip()
    cnt = solution(word)
    print(cnt)
