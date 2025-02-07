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
  console.log("bucket", bucket);
  const fileIDs = await Appwrite.storage.listFiles(bucket, [
    Query.and([
      Query.startsWith("name", name),
      Query.endsWith("name", colorMode + ".png"),
    ]),
  ]);
  const fileURLs = fileIDs.files.map((file) => {
    return Appwrite.storage.getFileView(bucket, file.$id);
  });
  return fileURLs;
}
