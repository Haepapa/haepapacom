import { Client, Account, Databases } from "appwrite";

const client = new Client();
const projectID = import.meta.env.VITE_AW_PROJECT_ID ?? "";
const endpointURL = import.meta.env.VITE_AW_URL_ENDPOINT ?? "";

const databaseID = import.meta.env.VITE_AW_DATABASE_ID ?? "";
const collection01ID = import.meta.env.VITE_AW_COLLECTION01_ID ?? "";
const collection02ID = import.meta.env.VITE_AW_COLLECTION02_ID ?? "";

client.setProject(projectID);
client.setEndpoint(endpointURL);

const databases = new Databases(client);
const account = new Account(client);

export const Appwrite = {
  client,
  databases,
  account,
  projectID,
  endpointURL,
  databaseID,
  collection01ID,
  collection02ID,
};
