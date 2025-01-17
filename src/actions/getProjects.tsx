import { Appwrite } from "@/lib/Appwrite";
import { Project } from "@/types/appwrite.d";

export default async function getProjects() {
  const response = await Appwrite.databases.listDocuments(
    Appwrite.databaseID,
    Appwrite.collection01ID
  );
  const projects: Project[] = response.documents.map((doc) => ({
    $id: doc.$id,
    title: doc.title,
    description: doc.description,
    tags: doc.tags,
  }));
  return projects;
}
