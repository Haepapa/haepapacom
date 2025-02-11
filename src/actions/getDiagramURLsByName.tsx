import { Appwrite } from "@/lib/Appwrite";
import { Query } from "appwrite";

type getDiagramURLsByNameProps = {
  name: string | null;
  colorMode: string | null;
  bucketID?: string | null;
};

export default async function getDiagramURLsByName({
  name,
  colorMode,
  bucketID,
}: getDiagramURLsByNameProps) {
  if (name === null) {
    throw new Error("Name cannot be null");
  }
  if (colorMode === null) {
    throw new Error("colorMode cannot be null");
  }
  let bucket = bucketID === null ? Appwrite.bucket01ID : bucketID;
  bucket = bucketID === undefined ? Appwrite.bucket01ID : bucketID; //assume project bucket if not specified

  const fileIDs = await Appwrite.storage.listFiles(bucket, [
    Query.and([
      Query.startsWith("name", name),
      Query.endsWith("name", colorMode + ".png"),
    ]),
  ]);
  const fileURLs = fileIDs.files.map((file) => {
    return [
      Appwrite.storage.getFileView(bucket, file.$id),
      prettyImageName(file.name),
    ];
  });
  console.log("fileURLs", fileURLs);
  return fileURLs;
}

function prettyImageName(fileName: string): string {
  // Split the file name by underscores
  const parts = fileName.split("_");

  // Extract the image name part (3rd part) and remove the light/dark suffix
  const imageNamePart = parts[2].replace(/(light|dark)\.png$/, "");

  // Convert camelCase to words with spaces
  const prettyName = imageNamePart.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Capitalize the first letter of each word
  return prettyName.replace(/\b\w/g, (char) => char.toUpperCase());
}
