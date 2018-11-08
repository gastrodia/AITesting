(ns ^:figwheel-no-load ring.dev
  (:require
    [ring.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
