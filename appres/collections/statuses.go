package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Statuses(db *models.Database, colProjectID string) (string, error) {

    // Create collection(s)
    colStatuses, err := app.CreateCollection(db.Id, "statuses")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "string",
            Name:        "status",
            Size:        100,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "string",
            Name:        "description",
            Size:        1000,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "string",
            Name:        "taskStatus",
            Size:        100,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "relationship",
            TwoWay:      true,
            RelatedCollectionID: colProjectID,
            RelationshipType: "oneToMany",
            OnDelete:   "setNull",
            Name:        "project",
            TwoWayKey:   "status",

        },
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colStatuses.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colStatuses.Id, nil
}