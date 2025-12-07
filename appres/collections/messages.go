package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Messages(db *models.Database) (string, error) {

    // Create collection(s)
    colMessages, err := app.CreateCollection(db.Id, "messages")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "string",
            Name:        "name",
            Size:        100,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "email",
            Name:        "email",
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "string",
            Name:        "message",
            Size:        1000,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colMessages.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colMessages.Id, nil
}