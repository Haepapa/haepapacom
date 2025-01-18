import { Appwrite } from "@/lib/Appwrite";
import { Project } from "@/types/appwrite.d";
import { Query } from "appwrite";

export default async function getProjects(tags: string[]): Promise<Project[]> {
  let query: string[];
  if (tags.length > 0) {
    query = [Query.contains("tags", tags)];
  } else {
    query = [];
  }

  const response = await Appwrite.databases.listDocuments(
    Appwrite.databaseID,
    Appwrite.collection01ID,
    query
  );
  const projects: Project[] = response.documents.map((doc) => ({
    $id: doc.$id,
    title: doc.title,
    description: doc.description,
    tags: doc.tags,
  }));
  return projects;
}
