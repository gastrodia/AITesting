(defproject hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
    [org.clojure/clojure "1.8.0"]
    [ring/ring-core "1.6.3"]
    [ring/ring-jetty-adapter "1.6.3"]]
  :ring {:handler sample/handler}
  :plugins [[lein-ring "0.12.1"]]
  )
