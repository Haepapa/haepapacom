package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Tasks(db *models.Database) (string, error) {

    // Create collection(s)
    colTasks, err := app.CreateCollection(db.Id, "tasks")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "string",
            Name:        "description",
            Size:        1000,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        // statuses
        // priorities
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colTasks.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colTasks.Id, nil
}