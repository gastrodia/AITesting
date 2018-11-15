import time
import random
#规则1：如果单词的结尾是C，可以在其后面再加一个B   
#规则2：如果单词里包含Ax，Ax可以换成Axx (x代表任意字母)
#规则3：如果单词里包含CCC, CCC可以换成B
#问题现有单词AC，是否可以通过上面三条规则产生单词AB？

def rule1(input):
    if input[-1] == "C":
        return input + "B"

def rule2(input):
    if input[0] == "A":
        return input + input[1]

def rule3(input):
    if "CCC" == input:
        return input.replace("CCC","B")

rules = [rule1,rule2,rule3]

def get_random_rule():
    index = random.randint(0,len(rules) - 1)
    return rules[index]

def find(demand,input):
    stop = False
    origin_input = input
    while not stop:
        if len(input) > 100:
            input = origin_input
        if demand(input):
            stop = True
            break
        rule = get_random_rule()
        input = rule(input) or input

           

def demand(input):
    print(input)
    #time.sleep(0.1)
    return "AB" == input

start = time.time()
find(demand,"AC")
end = time.time()
print(end - start)