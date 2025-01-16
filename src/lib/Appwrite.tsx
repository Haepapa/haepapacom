import { Client, Account, Databases } from "appwrite";

const client = new Client();
const projectID = process.env.REACT_APP_AW_PROJECT_ID ?? "";
const endpointURL = process.env.REACT_APP_AW_URL_ENDPOINT ?? "";
client.setProject(projectID);
client.setEndpoint(endpointURL);

const databases = new Databases(client);
const account = new Account(client);

export const Appwrite = {
  client,
  databases,
  account,
};
