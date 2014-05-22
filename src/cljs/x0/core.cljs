(ns x0.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]
            [sablono.core :as html :refer-macros [html]]))

;; TODO: heroku: compile to production
;; TODO: set production compilation
;; TODO: check in mobile: firefoxOS, android
;; TODO: how to display a message for a time period. create a component?
;; TODO: top ten scores: three letters, score (time?)
;; TODO: store score, failed results in web service (how to cache results and save once we recover connection: events)

;; TODO: integrate with cordova (what?)
;; TODO: integrate in android
;; TODO: integrate in firefoxOS  

;; TODO: options view: number of operations, seconds, operands
;; TBR: focus is using ref, it's a good practice?

(enable-console-print!)


(declare rand-dataset)

(def operators {"*" *})
#_(def operators {"*" * "+" + "-" - "/" quot})
(def max-ops 10)
(def max-time 100) ;; in seconds

(defn invalid-ops? [[op x y]]
  (or (and (= "/" op) (= 0 y))
      (and (some #{op} ["-" "/"]) (< x y))))


(defn init-state []
  {:score 0 
   :ops (rand-dataset)
   :pos 0
   :phase :start
   :remaining-time max-time})


(defn rand-dataset []
  (take max-ops 
        (remove invalid-ops? 
                (repeatedly 
                 #(vector (rand-nth (keys operators)) 
                          (rand-int 1) 
                          (rand-int 9))))))

(def app-state (atom (init-state)))

(defn handle-change [e owner {:keys [text]}]
  (om/set-state! owner :val (.. e -target -value)))


(defn check-op [e app owner op x y pos]
  (let [val (js/parseInt (.. e -target -value))]
    (if (= val ((get operators op) x y))
      (do 
        (om/transact! app :pos #(inc %))
        (om/transact! app :score #(inc %))
        (om/set-state! owner :val ""))
      (do
        (om/transact! app :pos #(inc %))
        (om/set-state! owner :val "")))
    (when (>= (:pos @app) max-ops)
      (om/transact! app :phase (fn [_] :end))
      (om/transact! app :pos (fn [_] 0)))))


(defn score-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.heads "Punts " [:span.score-val (:score app) "/" max-ops]]))))


(defn timer-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.heads "Temps " [:span.time-val (:remaining-time app)]]))))


(defn start-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.dots-game
             [:div.notice-square
              [:div.marq [:span {:class "yellow"} "x0"]]
              [:div.control-area
               [:a.start-new-game {:href "#" :on-click #(om/transact! app :phase (fn [_] :play))} "nou joc"]]]]))))



(defn play-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:val ""
       :timer (timeout (* 1000 max-time))})
    om/IWillMount
    (will-mount [_]
      (let [timer (om/get-state owner :timer)]
        (go
          (let [t (<! timer)]
            (print "time is over!")
            (om/transact! app :phase (fn [_] :end)))))
      (go (loop [timer (timeout 1000)]
            (<! timer)
            (if (<= (:remaining-time @app) 0)
              0
              (do
                (om/transact! app :remaining-time dec)
                (recur (timeout 1000)))))))
    om/IDidMount
    (did-mount [_]
      (let [node (om/get-node owner "op-field")]
        (.focus node)))

    om/IRenderState
    (render-state [_ state]
      (let [pos (:pos app)
            [op x y] (nth (:ops app) pos)
            operator '*]
        (html 
         [:div.dots-game
          [:div.header
           (om/build score-view app)
           (om/build timer-view app)]
          [:div.board-area
           [:div.chain-line]
           [:div.fot-highlights]
           [:div.board
            [:div.op x op y "="]
            (html/text-field {:ref "op-field"
                              :value (:val state)
                              :on-change #(handle-change % owner state)
                              :on-key-press  #(when (== (.-keyCode %) 13) 
                                                (check-op % app owner op x y pos))} 
                             :op-val)]]])))))


(defn restart-game [app]
  (om/update! app (init-state))
  (om/transact! app :phase (fn [_] :play)))


(defn end-view [app owner]
  (reify
    om/IRender
    (render [_]
      (html [:div.dots-game
             [:div.notice-square
              [:div.marq (str "Punts " (:score app))]
              [:div.control-area
               [:a.start-new-game {:href "#" :on-click #(restart-game app)} "new game"]]]]))))



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




(defn get-top-ten []
  (for [i (range 1 11)]
    {:user (.getItem js/localStorage (str i "user"))
     :score (.getItem js/localStorage (str i "score"))}))


#_(defn save-top-ten [tt]
  (for [i (count tt)]
    ()))





(om/root
 game-view
 app-state
 {:target (. js/document (getElementById "app"))})
