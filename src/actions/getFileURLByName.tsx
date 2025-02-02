import { Appwrite } from "@/lib/Appwrite";
import { Query } from "appwrite";

type getFileByNameProps = {
  name: string | null;
};

export default async function getFileURLByName({ name }: getFileByNameProps) {
  if (name === null) {
    throw new Error("Name cannot be null");
  }
  const fileID = await Appwrite.storage.listFiles(Appwrite.bucket01ID, [
    Query.equal("name", name),
  ]);
  if (fileID.files.length === 0) {
    throw new Error(`No files found with the name: ${name}`);
  }
  const fileURL = await Appwrite.storage.getFileView(
    Appwrite.bucket01ID,
    fileID.files[0].$id
  );
  return fileURL;
}
