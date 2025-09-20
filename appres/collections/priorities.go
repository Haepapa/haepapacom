package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Priorities(db *models.Database) (string, error) {

    // Create collection(s)
    colPriorities, err := app.CreateCollection(db.Id, "priorities")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "string",
            Name:        "priority",
            Size:        100,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colPriorities.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colPriorities.Id, nil
}