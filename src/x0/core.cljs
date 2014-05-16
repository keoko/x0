(ns x0.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))


(enable-console-print!)

(def max-ops 5)
(def ops (repeatedly max-ops #(vector (rand-int 9) (rand-int 9))))

(def app-state (atom {:ops ops}))


#_(om/root
  (fn [app owner]
    (dom/h2 nil "Hello World"))
  app-state
  {:target (. js/document (getElementById "app"))}) ;; <-- "app0" to "app1"



(om/root
  (fn [app owner]
    (apply dom/ul nil
      (map (fn [[a b]] (dom/li nil (str a " * " b "=" (* a b)))) (:ops app))))
  app-state
  {:target (. js/document (getElementById "app"))})
