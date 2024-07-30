# import random
# print("じゃんけんゲームを開始します")
# print("最初はグー")
# you_count = 0
# cp_count = 0


# while you_count < 3 and cp_count < 3 :
#     you = input("あなたの手札:")
   
#     janken=["グー","パー","チョキ"]
#     cp = random.choice(janken)
#     print("相手:{}".format(cp))

#     if you == cp:
#         print("あいこ") 
#     elif you == "パー":
#         if cp == "グー":
#             print("勝ち")
#             you_count += 1
#     elif you == "グー":
#         if cp == "チョキ":
#             print("勝ち")
#             you_count += 1
#     elif you == "チョキ":
#         if cp == "パー":
#             print ("勝ち")
#             you_count += 1
#     elif you == "パー":
#         if cp == "チョキ":
#          print("負け")
#          cp_count += 1
#     elif you == "グー":
#         if cp == "パー":
#             print("負け")
#             cp_count += 1
#     elif you == "チョキ":
#         if cp == "グー":
#             print("負け")
#             cp_count += 1

def taizann(x,y):
    return x+y




num = taizann(111,2)
print(num)