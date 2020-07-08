package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	PORT := os.Getenv("PORT")
	log.Printf("RESTful web service isrunning on %s port.", PORT)
	log.Fatal(http.ListenAndServe(":"+PORT, router))
	// fmt.Println("Start serving")
	// examplepackage.ServeSomething()
}
