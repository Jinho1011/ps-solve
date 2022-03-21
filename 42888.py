from sys import stdin


users = []


def addUser(id, nick):
    users.append({'id': id, 'nick': nick})


def modifyNick(id, nick):
    for user in users:
        if user['id'] == id:
            user['nick'] = nick


def isUserExist(id):
    for user in users:
        if user['id'] == id:
            return True
    return False


def addUsers(record):
    for r in record:
        RECORD = r.split(' ')
        if RECORD[0] == 'Enter':
            if isUserExist(RECORD[1]):
                modifyNick(RECORD[1], RECORD[2])
            else:
                addUser(RECORD[1], RECORD[2])
        elif RECORD[0] == 'Change':
            modifyNick(RECORD[1], RECORD[2])


def getNick(id):
    for user in users:
        if user['id'] == id:
            return user['nick']
    return None


def solution(record):
    addUsers(record)
    answers = []
    for r in record:
        RECORD = r.split(' ')
        nick = getNick(RECORD[1])
        print(RECORD, nick)
        if RECORD[0] == 'Enter':
            answers.append(nick + "님이 들어왔습니다.")
        elif RECORD[0] == 'Leave':
            answers.append(nick + "님이 나갔습니다.")
    return answers


record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo",
          "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

print(solution(record))
