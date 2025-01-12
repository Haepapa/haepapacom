import { Client, Account } from "appwrite";

const client = new Client();
const projectID = process.env.REACT_APP_AW_PROJECT_ID ?? "";
const endpointURL = process.env.REACT_APP_AW_URL_ENDPOINT ?? "";
client.setProject(projectID);
client.setEndpoint(endpointURL);

export const account = new Account(client);
