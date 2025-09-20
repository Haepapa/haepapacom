package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func ProjectStatusHist(db *models.Database) (string, error) {

    // Create collection(s)
    colProjectStatusHist, err := app.CreateCollection(db.Id, "projectStatusHist")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "datetime",
            Name:        "statusStartMonth",
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        // statuses
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colProjectStatusHist.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colProjectStatusHist.Id, nil
}