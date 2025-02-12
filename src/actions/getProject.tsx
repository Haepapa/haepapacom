import { Appwrite } from "@/lib/Appwrite";
import { Project } from "@/types/appwrite.d";
import { Query } from "appwrite";

export default async function getProject(
  documentId: string
): Promise<Project[]> {
  const response = await Appwrite.databases.listDocuments(
    Appwrite.databaseID,
    Appwrite.collection01ID,
    [Query.equal("$id", documentId)]
  );
  const project: Project[] = response.documents.map((doc) => ({
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
  return project;
}
