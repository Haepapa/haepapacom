import { Appwrite } from "@/lib/Appwrite";
import { Query } from "appwrite";

type getDiagramURLsByNameProps = {
  name: string | null;
  colorMode: string | null;
};

export default async function getDiagramURLsByName({
  name,
  colorMode,
}: getDiagramURLsByNameProps) {
  if (name === null) {
    throw new Error("Name cannot be null");
  }
  if (colorMode === null) {
    throw new Error("colorMode cannot be null");
  }
  const fileIDs = await Appwrite.storage.listFiles(Appwrite.bucket01ID, [
    Query.and([
      Query.startsWith("name", name),
      Query.endsWith("name", colorMode + ".png"),
    ]),
  ]);
  const fileURLs = fileIDs.files.map((file) => {
    return Appwrite.storage.getFileView(Appwrite.bucket01ID, file.$id);
  });
  return fileURLs;
}
