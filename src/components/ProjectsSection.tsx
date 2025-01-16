import SectionContainer from "./SectionContainer";
import { Appwrite } from "@/lib/Appwrite";
export default function ProjectsSection() {
  const databaseID = process.env.REACT_APP_AW_DATABASE_ID ?? "";
  const collection01ID = process.env.REACT_APP_AW_COLLECTION01_ID ?? "";
  let promise = Appwrite.databases.listDocuments(
    databaseID,
    collection01ID,
    []
  );
  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );

  return <SectionContainer>test</SectionContainer>;
}
