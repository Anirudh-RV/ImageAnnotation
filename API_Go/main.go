package main

import (
    "log"
    "net/http"
    "strings"
    "fmt"
    "io/ioutil"


    "github.com/gorilla/mux"
    "github.com/gorilla/handlers"

)

type SentData struct {
	data string
}


func get(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write([]byte(`{"message": "GET called"}`))
}

func post(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    w.Write([]byte(`{"message": "POST called"}`))
}

func put(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusAccepted)
    w.Write([]byte(`{"message": "PUT called"}`))
}

func delete(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write([]byte(`{"message": "DELETE called"}`))
}

func notFound(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusNotFound)
    w.Write([]byte(`{"message": "not found"}`))
}


// uses GET request
func returnAllImages(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")
  w.WriteHeader(http.StatusOK)
  w.Write([]byte(`{"message": "returnAllImages called"}`))
}

// uses GET request
func returnOneImage(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")
  w.WriteHeader(http.StatusOK)
  w.Write([]byte(`{"message": "returnOneImage called"}`))
}

// uses POST request
func addImageToDatabase(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")
  w.WriteHeader(http.StatusCreated)

// decoding the message and displaying
  reqBody, err := ioutil.ReadAll(r.Body)
   if err != nil {
     log.Fatal(err)
   }
  fmt.Printf("%s\n", reqBody)
  upper_name := strings.ToUpper(string(reqBody))

  w.Write([]byte(fmt.Sprintf(`{"data":"%s"}`, upper_name)))
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/", get).Methods(http.MethodGet)
    r.HandleFunc("/", post).Methods(http.MethodPost)
    r.HandleFunc("/", put).Methods(http.MethodPut)
    r.HandleFunc("/", delete).Methods(http.MethodDelete)
    r.HandleFunc("/", notFound)

    r.HandleFunc("/getallimages", returnAllImages).Methods("GET")
    r.HandleFunc("/getoneimage", returnOneImage).Methods(http.MethodGet)
    r.HandleFunc("/insertimagedata",addImageToDatabase).Methods("POST")


// To Handle CORS (Cross Origin Resource Sharing)
    headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
    methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS","DELETE"})
    origins := handlers.AllowedOrigins([]string{"*"})

    log.Fatal(http.ListenAndServe(":8080",handlers.CORS(headers,methods,origins)(r)))
}
