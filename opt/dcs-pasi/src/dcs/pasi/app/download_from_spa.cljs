(ns dcs.pasi.app.download-from-spa)

;; Thanks to:  http://blog.find-method.de/index.php?/archives/218-File-download-with-ClojureScript.html

(defn file-blob [blob-part mimetype]
  (js/Blob. [blob-part] {"type" mimetype}))

(defn link-for-blob [blob filename]
  (doto (.createElement js/document "a")
    (set! -download filename)
    (set! -href (.createObjectURL js/URL blob))))

(defn click-and-remove-link [link]
  (let [click-remove-callback
        (fn []
          (.dispatchEvent link (js/MouseEvent. "click"))
          (.removeChild (.-body js/document) link))]
    (.requestAnimationFrame js/window click-remove-callback)))

(defn add-link [link]
  (.appendChild (.-body js/document) link))

(defn download-data [encoded-data filename mimetype]
  (-> encoded-data
      (file-blob mimetype)
      (link-for-blob filename)
      add-link
      click-and-remove-link))