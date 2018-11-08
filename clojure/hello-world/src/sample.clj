(ns sample)

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello world!!."})