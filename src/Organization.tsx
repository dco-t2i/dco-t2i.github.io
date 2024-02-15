import Author from "./Author";
import Department from "./Department";
import { AuthorInfo, DepartmentInfo } from "./types";

const authors: AuthorInfo[] = [
  {
    name: "Kyungmin Lee",
    ref: "1",
    page: "https://kyungmnlee.github.io/"
  },
  {
    name: "Sangkyung Kwak",
    ref: "1",
    page: "https://alinlab.kaist.ac.kr/members.html"
  },
  {
    name: "Kihyuk Sohn",
    ref: "2",
    page: "https://sites.google.com/site/kihyuksml"
  },
  {
    name: "Jinwoo Shin",
    ref: "1",
    page: "https://alinlab.kaist.ac.kr/shin.html"
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
