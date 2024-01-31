import Author from "./Author";
import { AuthorInfo } from "./types";

const authors: AuthorInfo[] = [
  {
    name: "Anonymous Authors"
  },
];


const Organization = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Author authors={authors} />
      </div>
    </div>
  );
};

export default Organization;
