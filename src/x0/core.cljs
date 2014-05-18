(ns x0.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]
            [sablono.core :as html :refer-macros [html]]))

;; TODO: display timing
;; TODO: end game by timing
;; TODO: random ops
;; TODO: layout
;; TODO: heroku
;; TODO: different ops: +, -, *, div

(enable-console-print!)

(def op-sign "*")
(def max-ops 5)
(def max-time 10000) ;; 3 seconds
(def ops [[1 2] [3 4] [5 6] [7 8] [1 1]])


(defn init-state []
  {:score 0 
   :ops ops 
   :pos 0
   :phase :start
   :remaining-time max-time})

(def app-state (atom (init-state)))

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
        (om/set-state! owner :val "")))
    (when (>= (:pos @app) max-ops)
      (om/transact! app :phase (fn [_] :end))
      (om/transact! app :pos (fn [_] 0)))))


(defn score-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div "punts:" (:score app) "/" max-ops]))))


(defn timer-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div "temps:" (:remaining-time app)]))))


(defn start-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:h1 "x0 game" 
             [:div (html/submit-button 
                    {:on-click #(om/transact! app :phase (fn [_] :play))} "start")]]))))

(defn play-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:val ""
       :timer (timeout max-time)})
    om/IWillMount
    (will-mount [_]
      (let [timer (om/get-state owner :timer)]
        (go
          (let [t (<! timer)]
            (print "time is over!")
            (om/transact! app :phase (fn [_] :end)))))
      #_(go (loop [timer (timeout 1000) time (:remaining-time app)]
            (<! timer)
            (if (<= time 0)
              time
              (do
                (om/transact! app :remaining-time #(- % 1000))
                (recur (timeout 1000) (:remaining-time app)))))))

    om/IRenderState
    (render-state [_ state]
      (let [pos (:pos app)
            [x y] (nth (:ops app) pos)
            operator '*]
        (html 
         [:div x "*" y "="
          (om/build score-view app)
          (om/build timer-view app)
          (html/text-field {:value (:val state)
                            :on-change #(handle-change % owner state)
                            :on-key-press  #(when (== (.-keyCode %) 13) 
                                              (check-op % app x y pos owner))} 
                           :foo)])))))


(defn restart-game [app]
  (om/update! app (init-state))
  (om/transact! app :phase (fn [_] :play)))


(defn end-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div (str "score: " (:score app))
             [:div (html/submit-button 
                    {:on-click #(restart-game app)} "new game")]]))))



(defmulti entry-view (fn [app _] (:phase app)))

(defmethod entry-view :start
  [app owner] (start-view app owner))

(defmethod entry-view :play
  [app owner] (play-view app owner))

(defmethod entry-view :end
  [app owner] (end-view app owner))


(defn error-view [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (html [:div "ERROR!" (om/get-state owner :msg)])))
  )

(defn game-view [app owner]
  (reify
    om/IRender
    (render [_]
      (case (:phase app)
        :play (om/build play-view app)
        :start (om/build start-view app)
        :end (om/build end-view app)
        (om/build error-view app {:opts {:init-state {:msg (str "phase unknown:" (:phase app))}}})))))


(om/root
 game-view
 app-state
 {:target (. js/document (getElementById "app"))})
