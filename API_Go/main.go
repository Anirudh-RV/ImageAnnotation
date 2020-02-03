package main

import (
    "context"
    "log"
    "net/http"
    "strings"
    "fmt"
    "io/ioutil"
    "reflect"
    "unsafe"
    "os"

    // handles url/redirection
    "github.com/gorilla/mux"
    "github.com/gorilla/handlers"
    // MongoDB drivers
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

type SentData struct {
	data string
}


type Image_Names struct {
    Name  string
    Img_Name string
}

// to convert Byte to string
func BytesToString(b []byte) string {
    bh := (*reflect.SliceHeader)(unsafe.Pointer(&b))
    sh := reflect.StringHeader{bh.Data, bh.Len}
    return *(*string)(unsafe.Pointer(&sh))
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
    w.Write([]byte(`{"message": "Delete called"}`))
}



func notFound(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusNotFound)
    w.Write([]byte(`{"message": "not found"}`))
}

func deleteuser(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)

    // decoding the message and displaying
    reqBody, err := ioutil.ReadAll(r.Body)
    if err != nil {
      log.Fatal(err)
    }
    fmt.Printf("%s\n", reqBody)
    name := BytesToString(reqBody)

    // Set client options
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
    // Connect to MongoDB
    client, err := mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Connected to MongoDB!")
    // Handling the collection ImageNames in Database GoDB
    collection := client.Database("GoDB").Collection("ImageNames")

    // BSON filter for all documents with a value of name
    f := bson.M{"name": name}
    fmt.Println("Deleting documents with filter:", f)
    // Call the DeleteMany() method to delete docs matching filter
    res, err := collection.DeleteMany(context.TODO(), f)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(res)

    // To close the connection to MongoDB
    err = client.Disconnect(context.TODO())
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Connection to MongoDB closed.")

    w.Write([]byte(`{"message": "Success"}`))
}

// uses POST request
func getimages(w http.ResponseWriter, r *http.Request) {

  w.Header().Set("Content-Type", "application/json")
  w.WriteHeader(http.StatusOK)

// decoding the message and displaying
  reqBody, err := ioutil.ReadAll(r.Body)
   if err != nil {
     log.Fatal(err)
   }
  fmt.Printf("Name to be queried : %s\n", reqBody)

  str_name := BytesToString(reqBody)
  fmt.Println(reflect.TypeOf(str_name))

  // QUERYING MONGODB WITH name and returning the results
  clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
  // Connect to MongoDB
  client, err := mongo.Connect(context.TODO(), clientOptions)
  if err != nil {
      log.Fatal(err)
  }
  fmt.Println("Connected to MongoDB!")
// Handling the collection ImageNames in Database GoDB
  collection := client.Database("GoDB").Collection("ImageNames")

// add logic here :
// bson.M{} is the fiter that is being used
  filterCursor, err := collection.Find(context.TODO(), bson.M{"name": str_name})
  if err != nil {
      log.Fatal(err)
  }
  var ImageNamesFiltered []bson.M
  if err = filterCursor.All(context.TODO(), &ImageNamesFiltered); err != nil {
      log.Fatal(err)
  }
  fmt.Print("Length : ")
  fmt.Println(len(ImageNamesFiltered))
  result := ""
  for i := 0;i<len(ImageNamesFiltered);i++{
    fmt.Println(ImageNamesFiltered[i]["img_name"])
    result = result + ImageNamesFiltered[i]["img_name"].(string) + "</br>"
  }

  // To close the connection to MongoDB
  err = client.Disconnect(context.TODO())
  if err != nil {
      log.Fatal(err)
  }
  fmt.Println("Connection to MongoDB closed.")
// return result as a json object
  w.Write([]byte(fmt.Sprintf(`{"data":"%s"}`, result)))

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

// splitting data into user_name and an array of image names
  data := BytesToString(reqBody)
  splitData := strings.Split(data, ",")
  userName := splitData[0]

// Opening connection to database
  clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
  // Connect to MongoDB
  client, err := mongo.Connect(context.TODO(), clientOptions)
  if err != nil {
      log.Fatal(err)
  }
  // Check the connection
  err = client.Ping(context.TODO(), nil)
  if err != nil {
      log.Fatal(err)
  }
  fmt.Println("Connected to MongoDB!")
  // Handling the collection ImageNames in Database GoDB
  collection := client.Database("GoDB").Collection("ImageNames")

  // loop over each entry and insert into database
  for i := 1;i<len(splitData);i++{

    structData := Image_Names{userName,userName+"_"+splitData[i]}
    fmt.Println(structData)

    // To insert a single record
    insertResult, err := collection.InsertOne(context.TODO(), structData)
    if err != nil {
      log.Fatal(err)
    }
    fmt.Println("Inserted document: ", insertResult.InsertedID)

  }

  // To close the connection to MongoDB
  err = client.Disconnect(context.TODO())
  if err != nil {
      log.Fatal(err)
  }
  fmt.Println("Connection to MongoDB closed.")
  w.Write([]byte(`{"message": "Success"}`))
}

func saveastextfile(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")
  w.WriteHeader(http.StatusOK)

// decoding the message and displaying
  reqBody, err := ioutil.ReadAll(r.Body)
   if err != nil {
     log.Fatal(err)
   }
  str_name := BytesToString(reqBody)
  str_name = strings.ReplaceAll(str_name, ".jpeg", "")
  str_name = strings.ReplaceAll(str_name, "</br>", "")
  str_name = strings.ReplaceAll(str_name,"&emsp;","  ")
  str_name = strings.ReplaceAll(str_name, "<br>", "")

  splitData := strings.Split(str_name, ",")
  imageName := splitData[0]
  imageData := splitData[1]

  fmt.Println(imageName)
  fmt.Println(imageData)

// making text file and saving data in it.
  f, err := os.Create(imageName+".txt")
  if err != nil {
      fmt.Println(err)
      return
  }
  l, err := f.WriteString(imageData)
  if err != nil {
      fmt.Println(err)
      f.Close()
      return
  }
  fmt.Println(l, "bytes written successfully")
  err = f.Close()
  if err != nil {
      fmt.Println(err)
      w.Write([]byte(`{"message": "FAIL"}`))
  }

  w.Write([]byte(`{"message": "saveastextfile called successfully"}`))

}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/", get).Methods(http.MethodGet)
    r.HandleFunc("/", post).Methods(http.MethodPost)
    r.HandleFunc("/", put).Methods(http.MethodPut)
    r.HandleFunc("/", delete).Methods(http.MethodDelete)
    r.HandleFunc("/", notFound)

    r.HandleFunc("/getimages", getimages).Methods(http.MethodPost)
    r.HandleFunc("/insertimagedata",addImageToDatabase).Methods(http.MethodPost)
    r.HandleFunc("/deleteuser",deleteuser).Methods(http.MethodPost)
    r.HandleFunc("/saveastextfile",saveastextfile).Methods(http.MethodPost)
// To Handle CORS (Cross Origin Resource Sharing)
    headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
    methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS","DELETE"})
    origins := handlers.AllowedOrigins([]string{"*"})

    fmt.Println("Running on port : 8080")
    log.Fatal(http.ListenAndServe(":8080",handlers.CORS(headers,methods,origins)(r)))
}
