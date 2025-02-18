import { Appwrite } from "@/lib/Appwrite";
import { Query } from "appwrite";

type getFileByNameProps = {
  name: string | null;
  bucketID?: string | null;
};

export default async function getFileURLByName({
  name,
  bucketID,
}: getFileByNameProps) {
  if (name === null) {
    throw new Error("Name cannot be null");
  }
  let bucket = bucketID === null ? Appwrite.bucket01ID : bucketID;
  bucket = bucketID === undefined ? Appwrite.bucket01ID : bucketID; //assume project bucket if not specified
  const fileID = await Appwrite.storage.listFiles(bucket, [
    Query.equal("name", name),
  ]);
  if (fileID.files.length === 0) {
    throw new Error(`No files found with the name: ${name}`);
  }
  const fileURL = await Appwrite.storage.getFileView(
    bucket,
    fileID.files[0].$id
  );
  return fileURL;
}
