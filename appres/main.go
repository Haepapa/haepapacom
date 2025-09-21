package main

import (
	"appres/collections"
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

    // Create collections (dependendices for relationshipts)
    _, err = collections.Messages(db)
    if err != nil {
        log.Println("Error creating Messages collection:", err)
        return
    }
    
    colProjects, err := collections.Projects(db)
    if err != nil {
        log.Println("Error creating Projects collection:", err)
        return
    }

    _, err = collections.Notes(db, colProjects)
    if err != nil {
        log.Println("Error creating Notes collection:", err)
        return
    }
    
    colTasks, err := collections.Tasks(db, colProjects)
    if err != nil {
        log.Println("Error creating Tasks collection:", err)
        return
    }

    _, err = collections.Priorities(db, colTasks)
    if err != nil {
        log.Println("Error creating Priorities collection:", err)
        return
    }

    colStatuses, err := collections.Statuses(db, colProjects)
    if err != nil {
        log.Println("Error creating Statuses collection:", err)
        return
    }

    _, err = collections.Tags(db, colProjects)
    if err != nil {
        log.Println("Error creating Tags collection:", err)
        return
    }

    _, err = collections.Technologies(db, colProjects)
    if err != nil {
        log.Println("Error creating Technologies collection:", err)
        return
    }

    // with relationships
    _, err = collections.Features(db, colStatuses, colProjects)
    if err != nil {
        log.Println("Error creating Features collection:", err)
        return
    }

    _, err = collections.ProjectStatusHist(db, colStatuses, colProjects)
    if err != nil {
        log.Println("Error creating ProjectStatusHist collection:", err)
        return
    }

    // Create collection(s)
    log.Println("Successfully created database, collection, and attributes!")
}