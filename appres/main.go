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
    colMessages, err := collections.Messages(db)
    if err != nil {
        log.Println("Error creating Messages collection:", err)
        return
    }
    _ = colMessages

    colNotes, err := collections.Notes(db)
    if err != nil {
        log.Println("Error creating Notes collection:", err)
        return
    }
    _ = colNotes

    colPriorities, err := collections.Priorities(db)
    if err != nil {
        log.Println("Error creating Priorities collection:", err)
        return
    }
    _ = colPriorities

    colStatuses, err := collections.Statuses(db)
    if err != nil {
        log.Println("Error creating Statuses collection:", err)
        return
    }
    _ = colStatuses

    colTags, err := collections.Tags(db)
    if err != nil {
        log.Println("Error creating Tags collection:", err)
        return
    }
    _ = colTags

    colTechnologies, err := collections.Technologies(db)
    if err != nil {
        log.Println("Error creating Technologies collection:", err)
        return
    }
    _ = colTechnologies

    // with relationships
    colFeatures, err := collections.Features(db)
    if err != nil {
        log.Println("Error creating Features collection:", err)
        return
    }
    _ = colFeatures

    colProjectStatusHist, err := collections.ProjectStatusHist(db)
    if err != nil {
        log.Println("Error creating ProjectStatusHist collection:", err)
        return
    }
    _ = colProjectStatusHist

    colProjects, err := collections.Projects(db)
    if err != nil {
        log.Println("Error creating Projects collection:", err)
        return
    }
    _ = colProjects

    colTasks, err := collections.Tasks(db)
    if err != nil {
        log.Println("Error creating Tasks collection:", err)
        return
    }
    _ = colTasks

    // Create collection(s)
    log.Println("Successfully created database, collection, and attributes!")
}