package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Notes(db *models.Database, colProjectID string) (string, error) {

    // Create collection(s)
    colNotes, err := app.CreateCollection(db.Id, "notes")
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
            Name:        "note",
            Size:        1000,
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
            TwoWayKey:   "notes",

        },
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colNotes.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colNotes.Id, nil
}