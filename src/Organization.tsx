import Author from "./Author";
import PDFBtn from "./PDFBtn";
import { AuthorInfo } from "./types";

const authors: AuthorInfo[] = [
  {
    name: "Anonymous Authors"
  }
];

const Organization = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Author authors={authors} />
      </div>
      <div>
        <PDFBtn placeholder="Paper" />
      </div>
    </div>
  );
};

export default Organization;
