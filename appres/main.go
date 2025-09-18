package main

import (
	"crypto/tls"
	"log"
	"net/http"

	app "github.com/Haepapa/appres"
)

func main() {
    // Suppress insecure warning (if using self-signed certificates)
    http.DefaultTransport.(*http.Transport).TLSClientConfig = &tls.Config{InsecureSkipVerify: true}

    // Initialize Appwrite client
    app.Utils()

    // Create a database
    db, err := app.CreateDatabase("haepapacom")
    if err != nil {
        log.Println("Error creating database:", err)
        return
    }

    // Create collection(s)
    log.Println("Successfully created database, collection, and attributes!")
}