def solution(board, moves):
    answer = 0
    bascket = []
    
    for m in moves:
        for b in board:
            if b[m-1] != 0:
                bascket.append(b[m-1])
                b[m-1] = 0
                
                if len(bascket) > 1:
                    if bascket[-1] == bascket[-2]:
                        bascket.pop()
                        bascket.pop()
                        answer+=2
                break
            
    return answer

board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]

res = solution(board, moves)
print(res)