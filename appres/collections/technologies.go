package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Technologies(db *models.Database,colProjectID string) (string, error) {

    // Create collection(s)
    colTechnologies, err := app.CreateCollection(db.Id, "technologies")
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
            Type:        "string",
            Name:        "documentName",
            Size:        200,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "url",
            Name:        "link",
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
            TwoWayKey:   "technology",

        },
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colTechnologies.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colTechnologies.Id, nil
}