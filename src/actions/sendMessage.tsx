import { Message } from "@/types/appwrite.d";
import { Appwrite } from "@/lib/Appwrite";
import { ID } from "appwrite";

export default async function sendMessage(m: Message): Promise<boolean> {
  try {
    await Appwrite.databases.createDocument(
      Appwrite.databaseID, // databaseId
      Appwrite.collection03ID, // collectionId
      ID.unique(),
      m
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
