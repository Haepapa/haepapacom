package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Projects(db *models.Database) (string, error) {

    // Create collection(s)
    colProjects, err := app.CreateCollection(db.Id, "projects")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "string",
            Name:        "title",
            Size:        100,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "string",
            Name:        "description",
            Size:        200,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "string",
            Name:        "inspiration",
            Size:        1000,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "boolean",
            Name:        "draft",
            Required:    false,
            Array:       false,
            Encrypt:     false,
        },
        {
            Type:        "string",
            Name:        "name",
            Size:        50,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "string",
            Name:        "idea",
            Size:        1000,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colProjects.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colProjects.Id, nil
}