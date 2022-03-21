def solution(new_id):
    answer = ''
    new_id = new_id.lower()
    
    for s in new_id:
        if  s.isalpha() or s.isdigit() or s in ['-','_','.']:
            answer += s
    
    while '..' in answer:
        answer = answer.replace('..','.')
        
    if answer.startswith('.'):
        answer = answer[1:]
    if answer.endswith('.'):
        answer = answer[:-1]
        
    if len(answer) == 0:
        answer = 'a'
        
    if len(answer) >= 16 :
        answer = answer[:15]
        
    while True:
        if answer.endswith('.'):
            answer = answer[:-1]
        else: 
            break
    
    if len(answer) <= 2:
        cnt = 3-len(answer)
        ch = answer[-1]
        
        for i in range(0,cnt):
            answer += ch
    return answer

answer = solution("...!@BaT#*..y.abcdefghijklm")
print(answer)