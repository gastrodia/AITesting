(ns lein-stuff.core
  (:gen-class))


(def randVar 10)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (prinln randVar)
  (println "Hello, World!"))
   
(println (+ 1 1))



(defn sayhello 
  (println "hello")
  )