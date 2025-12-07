import { Appwrite } from "@/lib/Appwrite";
import { Tag } from "@/types/appwrite.d";

export default async function getTags() {
  const response = await Appwrite.databases.listDocuments(
    Appwrite.databaseID,
    Appwrite.collection02ID
  );
  const tags: Tag[] = response.documents.map((doc) => ({
    $id: doc.$id,
    tag: doc.tag,
  }));
  return tags;
}
