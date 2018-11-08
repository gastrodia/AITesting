(ns clojure-tutorial.fundamentals
  (:require [clojure.string :as string]))

(println "Hello"
         (+ 2 3)
         (slurp "D://install_docker.sh")
         )

nil

true

false

\H \r \space
(type #".*")

(type [1 2 3])

(type {:a 1, :b 2})

#{:a :b}
'(1 2 3)

(type `(1 2 3))

(println (string/upper-case "Hello"))


(def ^:private names (string/split-lines (slurp "D://install_docker.sh")))

(def mangle
  (fn [string]
    (string/join "-" (string/reverse string))
    )
  )

(defn demangle [mangled-string]
  (string/reverse (string/replace mangled-string "-" ""))
  )

(defn palidrome? [word]
  (let [lower-case (string/lower-case word)
        reversed (string/reverse lower-case)
        ]
    (= reversed lower-case)))

(= ["hello" 2 3 ] [(str "hell" "o") 2 3])

(contains? #{"a" "b" "c"} "c")

(if (= "hello" (str "o")) "YES" "No")

(cond
  (= 1 2)
  "yes"
  (not= 3 4)
  "no"
  true
  :haha
  )
;
;(deftest test-mangle
;          (is (= "abc" (mangle "cba")))
;         )