package collections

import (
	"log"

	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func Features(db *models.Database, colStatusesID string, colProjectID string) (string, error) {

    // Create collection(s)
    colFeatures, err := app.CreateCollection(db.Id, "features")
    if err != nil {
        return "", err
    }

    // Create attributes in collection(s)
    attVals := []app.AttributeType{
        {
            Type:        "string",
            Name:        "description",
            Size:        500,
            Required:    true,
            Array:       false,
            Encrypt:     false,
        }, 
        {
            Type:        "relationship",
            TwoWay:      true,
            RelatedCollectionID: colStatusesID,
            RelationshipType: "oneToMany",
            OnDelete:   "setNull",
            Name:        "status",
            TwoWayKey:   "features",

        },
        {
            Type:        "relationship",
            TwoWay:      true,
            RelatedCollectionID: colProjectID,
            RelationshipType: "oneToMany",
            OnDelete:   "setNull",
            Name:        "project",
            TwoWayKey:   "feature",

        },
    }

    for _, att := range attVals {
        err = app.CreateAttribute(db.Id, colFeatures.Id, att)
        if err != nil {
            log.Println("Error creating attribute:", err)
            return "", err
        }
    }
    return colFeatures.Id, nil
}