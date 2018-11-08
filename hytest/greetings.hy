(defn greet [name] (print "hello from hy," name))
(import hello)
(.greet hello "foo")