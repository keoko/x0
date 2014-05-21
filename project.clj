(defproject x0 "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.5.0"]
                 [sablono "0.2.17"]
                 [ring/ring-jetty-adapter "1.1.6"]
                 [compojure "1.1.8"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src/clj"]

  :resource-paths ["resources"]

  :uberjar-name "x0-standalone.jar"

  :cljsbuild { 
    :builds [{:id "x0"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/js/x0.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})
