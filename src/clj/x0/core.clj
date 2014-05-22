(ns x0.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :refer [file-response]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [compojure.handler :as handler]))


(defn index []
  (file-response "public/html/index.html" {:root "resources"}))

(defroutes routes
  (GET "/" [] (index))
  (route/resources "/")
  (route/not-found "page not found"))

(def application (handler/site routes))

(defn start [port]
  (jetty/run-jetty application {:port port
                               :join? false}))

(defn -main [port]
  (let [p (Integer. (or port "8080"))]
    (start p)))
