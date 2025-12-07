package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Tags(db *models.Database, colProjectID string) (string, error) {

    // Create collection(s)
    colTags, err := app.CreateCollection(db.Id, "tags")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "string",
            Name:        "tags",
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
            TwoWayKey:   "tag",

        },
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colTags.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colTags.Id, nil
}