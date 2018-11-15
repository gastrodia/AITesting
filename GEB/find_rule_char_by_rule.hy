(import time)
(import random)


(defn rule1 [input]
    (if (= (get input -1) "C") (+ input "B")))

;(print (rule1 "AC"))

(defn rule2 [input]
     (if (= (get input 0) "A")
         (+ input (get input 1))))

;(print (rule2 "AC"))

(defn rule3 [input]
     (if "CCC" in input)
         return input.replace("CCC","B"))

; (setv rules  [rule1,rule2,rule3])

; def get_random_rule():
;     index = random.randint(0,len(rules) - 1)
;     return rules[index]

; def find(demand,input):
;     stop = False
;     origin_input = input
;     while not stop:
;         if len(input) > 10:
;             input = origin_input
;         if demand(input):
;             stop = True
;             break
;         rule = get_random_rule()
;         input = rule(input) or input

           

; def demand(input):
;     #print(input)
;     #time.sleep(0.1)
;     return "AB" == input

; start = time.time()
; find(demand,"AC")
; print(end - start)