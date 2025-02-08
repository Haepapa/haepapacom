import { Appwrite } from "@/lib/Appwrite";
import { Project } from "@/types/appwrite.d";
import { Query } from "appwrite";

export default async function getProjects(tags: string[]): Promise<Project[]> {
  let query: string[];
  if (tags.length > 0) {
    query = [
      Query.and([Query.contains("tags", tags), Query.equal("draft", false)]),
    ];
  } else {
    query = [Query.equal("draft", false)];
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
    status: doc.status,
    $updatedAt: doc.$updatedAt,
    projectStatusHist: doc.projectStatusHist,
    idea: doc.idea,
    inspiration: doc.inspiration,
    name: doc.name,
    features: doc.features,
    technologies: doc.technologies,
  }));
  return projects;
}
