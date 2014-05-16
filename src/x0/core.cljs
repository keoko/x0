(ns x0.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))


(enable-console-print!)

(def op-sign "*")
(def max-ops 5)
(def ops (repeatedly max-ops #(vector (rand-int 9) (rand-int 9))))

(def app-state (atom {:ops ops}))


(defn ops-view [app owner]
  (apply dom/ul nil
         (map (fn [[a b]] (dom/div nil 
                                   (str a op-sign b "= ")
                                   (dom/input #js {:type "text" :value "test1"})
                                   (dom/button nil "submit")))
              (:ops app))))

(om/root
 ops-view
 app-state
 {:target (. js/document (getElementById "app"))})
