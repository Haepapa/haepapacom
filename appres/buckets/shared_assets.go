package buckets

import (
	app "github.com/Haepapa/appres"
	"github.com/appwrite/sdk-for-go/models"
)
func SharedAssets() (*models.Bucket, error) {
	buc := app.BucketType{
		Name:         "shared_assets",
		Permissions:  []string{`read("any")`},
		Enabled:      true,
		FileSecurity: false,
		MaxFileSize:  30000000, // 30MB
		Compression:  "none",
		Encryption:   false,
		Antivirus:    false,
	}
	bucObj, err := app.CreateBucket(buc)
	if err != nil {
		return nil, err
	}
	return bucObj, nil
}