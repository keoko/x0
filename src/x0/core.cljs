(ns x0.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [sablono.core :as html :refer-macros [html]]))


(enable-console-print!)

(def op-sign "*")
(def max-ops 5)
(def ops [[1 2] [3 4] [5 6] [7 8] [1 1]])

(def app-state (atom {:score 0 :ops ops :pos 0}))

(defn handle-change [e owner {:keys [text]}]
  (om/set-state! owner :val (.. e -target -value)))


(defn check-op [e app x y pos owner]
  (let [val (js/parseInt (.. e -target -value))]
    (if (= val (* x y))
      (do 
        (.alert js/window "Molt bé")
        (om/transact! app :pos #(inc %))
        (om/transact! app :score #(inc %))
        (om/set-state! owner :val ""))
      (do
        (.alert js/window (str "Noo .. no passa res, prova amb la següent"))
        (om/transact! app :pos #(inc %))
        (om/set-state! owner :val "")))))


(defn score-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div "punts:" (:score app) "/" max-ops]))))

(defn ops-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:val ""})
    om/IRenderState
    (render-state [_ state]
      (let [pos (:pos app)
            [x y] (nth (:ops app) pos)
            operator '*]
        (html 
         [:div x "*" y "="
          (om/build score-view app)
          (html/text-field {:value (:val state)
                            :on-change #(handle-change % owner state)
                            :on-key-press  #(when (== (.-keyCode %) 13) 
                                              (check-op % app x y pos owner))} 
                           :foo)])))))

(om/root
 ops-view
 app-state
 {:target (. js/document (getElementById "app"))})
