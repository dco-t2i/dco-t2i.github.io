import Author from "./Author";
import Department from "./Department";
import { AuthorInfo, DepartmentInfo } from "./types";

const authors: AuthorInfo[] = [
  {
    name: "Kyungmin Lee",
    ref: "1"
  },
  {
    name: "Sangkyung Kwak",
    ref: "1"
  },
  {
    name: "Kihyuk Sohn",
    ref: "2"
  },
  {
    name: "Jinwoo Shin",
    ref: "1"
  }
];

const departments: DepartmentInfo[] = [
  {
    name: "KAIST",
    ref: "1"
  },
  {
    name: "Google Research",
    ref: "2"
  }
];

const Organization = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Author authors={authors} />
      </div>
      <div>
        <Department departments={departments} />
      </div>
      {/* <div>
        <PDFBtn placeholder="Paper" />
      </div> */}
    </div>
  );
};

export default Organization;
