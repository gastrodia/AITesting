(ns ring.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [ring.core-test]))

(doo-tests 'ring.core-test)
