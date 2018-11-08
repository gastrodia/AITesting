(ns hello-world.core)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

  (defn handler [request]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body "Hello World"})