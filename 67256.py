def get_diff(T, n):
    diff = abs(T-n)
    if diff in [1,3]: diff=1
    elif diff in [2, 4, 6]: diff=2
    elif diff in [5, 7, 9]: diff=3
    elif diff in [8, 10]: diff=4
    return diff
    
def solution(numbers, hand):
    answer = ''
    left_thumb = 10
    right_thumb = 12
    
    for n in numbers:        
        if n in [1,4,7]: 
            answer += 'L'
            left_thumb = n
        elif n in [3,6,9]: 
            answer += 'R'
            right_thumb = n
        else:
            if n==0: n=11
            left_diff = get_diff(left_thumb, n)
            right_diff = get_diff(right_thumb, n)
            
            if left_diff == right_diff:
                if hand == "right":
                    answer+='R'
                    right_thumb = n
                else:
                    answer+='L'
                    left_thumb = n
            elif left_diff < right_diff:
                answer+='L'
                left_thumb = n
            else:
                answer+='R'
                right_thumb = n
        print(left_thumb, right_thumb,n, answer[-1])
    return answer